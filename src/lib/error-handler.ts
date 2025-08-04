import { NextRequest, NextResponse } from 'next/server';

import { SecurityError, ValidationError, logSecurityEvent } from './security';

// Error types
export enum ErrorType {
  VALIDATION = 'VALIDATION',
  SECURITY = 'SECURITY',
  NETWORK = 'NETWORK',
  SERVER = 'SERVER',
  CLIENT = 'CLIENT',
  UNKNOWN = 'UNKNOWN',
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

// Error interface
export interface AppError {
  type: ErrorType;
  severity: ErrorSeverity;
  message: string;
  code: string;
  statusCode: number;
  timestamp: string;
  path?: string;
  userAgent?: string;
  ip?: string;
  details?: Record<string, unknown>;
}

// Error handler class
export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorLog: AppError[] = [];
  private maxLogSize = 1000;

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  // Handle and log errors
  handleError(error: unknown, request?: NextRequest): AppError {
    const appError = this.createAppError(error, request);
    this.logError(appError);
    return appError;
  }

  // Create standardized error object
  private createAppError(error: unknown, request?: NextRequest): AppError {
    const timestamp = new Date().toISOString();
    const path = request?.url || 'unknown';
    const userAgent = request?.headers.get('user-agent') || 'unknown';
    const ip = request?.headers.get('x-forwarded-for') || 
               request?.headers.get('x-real-ip') || 
               'unknown';

    // Handle known error types
    if (error instanceof SecurityError) {
      return {
        type: ErrorType.SECURITY,
        severity: ErrorSeverity.HIGH,
        message: error.message,
        code: error.code,
        statusCode: error.statusCode,
        timestamp,
        path,
        userAgent,
        ip,
        details: { originalError: error.name },
      };
    }

    if (error instanceof ValidationError) {
      return {
        type: ErrorType.VALIDATION,
        severity: ErrorSeverity.MEDIUM,
        message: error.message,
        code: 'VALIDATION_ERROR',
        statusCode: 400,
        timestamp,
        path,
        userAgent,
        ip,
        details: { field: error.field },
      };
    }

    // Handle network errors
    if (error && typeof error === 'object' && 'code' in error && 
        (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED')) {
      return {
        type: ErrorType.NETWORK,
        severity: ErrorSeverity.MEDIUM,
        message: 'Network connection error',
        code: error.code,
        statusCode: 503,
        timestamp,
        path,
        userAgent,
        ip,
        details: { originalError: (error as { message?: string }).message || 'Unknown error' },
      };
    }

    // Handle server errors
    if (error && typeof error === 'object' && 'statusCode' in error && 
        typeof (error as { statusCode: number }).statusCode === 'number' && 
        (error as { statusCode: number }).statusCode >= 500) {
      return {
        type: ErrorType.SERVER,
        severity: ErrorSeverity.HIGH,
        message: 'Internal server error',
        code: 'INTERNAL_SERVER_ERROR',
        statusCode: 500,
        timestamp,
        path,
        userAgent,
        ip,
        details: { originalError: (error as { message?: string }).message || 'Unknown error' },
      };
    }

    // Default error
    return {
      type: ErrorType.UNKNOWN,
      severity: ErrorSeverity.MEDIUM,
      message: (error as { message?: string }).message || 'An unexpected error occurred',
      code: 'UNKNOWN_ERROR',
      statusCode: 500,
      timestamp,
      path,
      userAgent,
      ip,
      details: { originalError: error },
    };
  }

  // Log error
  private logError(error: AppError): void {
    // Add to in-memory log
    this.errorLog.push(error);
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog.shift();
    }

    // Log to console with appropriate level
    const logMessage = `[${error.severity}] ${error.type} - ${error.message} (${error.code})`;
    const logDetails = {
      path: error.path,
      ip: error.ip,
      userAgent: error.userAgent,
      details: error.details,
    };

    switch (error.severity) {
      case ErrorSeverity.CRITICAL:
        console.error(logMessage, logDetails);
        logSecurityEvent('CRITICAL_ERROR', logDetails);
        break;
      case ErrorSeverity.HIGH:
        console.error(logMessage, logDetails);
        logSecurityEvent('HIGH_SEVERITY_ERROR', logDetails);
        break;
      case ErrorSeverity.MEDIUM:
        console.warn(logMessage, logDetails);
        break;
      case ErrorSeverity.LOW:
        console.log(logMessage, logDetails);
        break;
    }
  }

  // Get error statistics
  getErrorStats(): {
    total: number;
    byType: Record<ErrorType, number>;
    bySeverity: Record<ErrorSeverity, number>;
    recent: AppError[];
  } {
    const byType = Object.values(ErrorType).reduce((acc, type) => {
      acc[type] = this.errorLog.filter(e => e.type === type).length;
      return acc;
    }, {} as Record<ErrorType, number>);

    const bySeverity = Object.values(ErrorSeverity).reduce((acc, severity) => {
      acc[severity] = this.errorLog.filter(e => e.severity === severity).length;
      return acc;
    }, {} as Record<ErrorSeverity, number>);

    return {
      total: this.errorLog.length,
      byType,
      bySeverity,
      recent: this.errorLog.slice(-10), // Last 10 errors
    };
  }

  // Clear error log
  clearLog(): void {
    this.errorLog = [];
  }
}

// Global error handler instance
export const errorHandler = ErrorHandler.getInstance();

// API error response helper
export function createErrorResponse(error: AppError): NextResponse {
  const response = NextResponse.json(
    {
      error: error.message,
      code: error.code,
      timestamp: error.timestamp,
    },
    { status: error.statusCode }
  );

  // Add security headers
  response.headers.set('X-Error-Code', error.code);
  response.headers.set('X-Error-Type', error.type);

  return response;
}

// Client-side error handling
export function handleClientError(error: unknown, context?: string): void {
  const errorInfo = {
    message: (error as { message?: string }).message || 'Unknown error',
    stack: (error as { stack?: string }).stack,
    context,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
  };

  // Log to console
  console.error('Client Error:', errorInfo);

  // In production, you might want to send this to an error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: send to error tracking service
    // errorTrackingService.captureException(error, errorInfo);
  }
} 