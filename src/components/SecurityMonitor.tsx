"use client";

import { useEffect, useState } from 'react';
import { handleClientError } from '@/lib/error-handler';

interface SecurityEvent {
  type: string;
  timestamp: string;
  details: any;
}

export default function SecurityMonitor() {
  const [events, setEvents] = useState<SecurityEvent[]>([]);

  useEffect(() => {
    // Monitor for suspicious activities
    const securityChecks = {
      // Check for dev tools
      checkDevTools: () => {
        const devtools = {
          open: false,
          orientation: null as string | null,
        };

        const threshold = 160;

        const emitEvent = () => {
          if (devtools.open) {
            const event: SecurityEvent = {
              type: 'DEV_TOOLS_OPENED',
              timestamp: new Date().toISOString(),
              details: { orientation: devtools.orientation }
            };
            setEvents(prev => [...prev, event]);
            handleClientError(new Error('Dev tools detected'), 'SecurityMonitor');
          }
        };

        setInterval(() => {
          const widthThreshold = window.outerWidth - window.innerWidth > threshold;
          const heightThreshold = window.outerHeight - window.innerHeight > threshold;
          const orientation = widthThreshold ? 'vertical' : 'horizontal';

          if (
            !(heightThreshold && widthThreshold) &&
            (widthThreshold || heightThreshold)
          ) {
            if ((!devtools.open || devtools.orientation !== orientation)) {
              devtools.open = true;
              devtools.orientation = orientation;
              emitEvent();
            }
          } else {
            devtools.open = false;
            devtools.orientation = null;
          }
        }, 500);
      },

      // Check for console access
      checkConsoleAccess: () => {
        const originalConsole = {
          log: console.log,
          warn: console.warn,
          error: console.error,
          info: console.info,
        };

        const logEvent = (level: string, ...args: any[]) => {
          const event: SecurityEvent = {
            type: 'CONSOLE_ACCESS',
            timestamp: new Date().toISOString(),
            details: { level, args: args.map(arg => String(arg).substring(0, 100)) }
          };
          setEvents(prev => [...prev, event]);
        };

        console.log = (...args) => {
          logEvent('log', ...args);
          originalConsole.log.apply(console, args);
        };

        console.warn = (...args) => {
          logEvent('warn', ...args);
          originalConsole.warn.apply(console, args);
        };

        console.error = (...args) => {
          logEvent('error', ...args);
          originalConsole.error.apply(console, args);
        };

        console.info = (...args) => {
          logEvent('info', ...args);
          originalConsole.info.apply(console, args);
        };
      },

      // Check for right-click
      checkRightClick: () => {
        document.addEventListener('contextmenu', (e) => {
          const target = e.target as HTMLElement;
          const event: SecurityEvent = {
            type: 'RIGHT_CLICK_ATTEMPT',
            timestamp: new Date().toISOString(),
            details: { 
              target: target?.tagName,
              x: e.clientX,
              y: e.clientY
            }
          };
          setEvents(prev => [...prev, event]);
        });
      },

      // Check for keyboard shortcuts
      checkKeyboardShortcuts: () => {
        document.addEventListener('keydown', (e) => {
          const suspiciousKeys = [
            'F12',
            'F5',
            'Ctrl+Shift+I',
            'Ctrl+Shift+J',
            'Ctrl+Shift+C',
            'Ctrl+U',
            'Ctrl+Shift+U'
          ];

          const keyCombo = [
            e.key,
            e.ctrlKey ? 'Ctrl+' : '',
            e.shiftKey ? 'Shift+' : '',
            e.altKey ? 'Alt+' : '',
            e.metaKey ? 'Meta+' : ''
          ].join('');

          if (suspiciousKeys.some(key => keyCombo.includes(key))) {
            const event: SecurityEvent = {
              type: 'SUSPICIOUS_KEYBOARD_SHORTCUT',
              timestamp: new Date().toISOString(),
              details: { keyCombo }
            };
            setEvents(prev => [...prev, event]);
            handleClientError(new Error(`Suspicious keyboard shortcut: ${keyCombo}`), 'SecurityMonitor');
          }
        });
      },

      // Check for iframe access attempts
      checkIframeAccess: () => {
        try {
          if (window.top !== window.self) {
            const event: SecurityEvent = {
              type: 'IFRAME_ACCESS_ATTEMPT',
              timestamp: new Date().toISOString(),
              details: { referrer: document.referrer }
            };
            setEvents(prev => [...prev, event]);
            handleClientError(new Error('Site accessed from iframe'), 'SecurityMonitor');
          }
        } catch (error) {
          // Cross-origin access blocked
          const event: SecurityEvent = {
            type: 'CROSS_ORIGIN_ACCESS_BLOCKED',
            timestamp: new Date().toISOString(),
            details: { error: error instanceof Error ? error.message : 'Unknown error' }
          };
          setEvents(prev => [...prev, event]);
        }
      },

      // Monitor network requests
      checkNetworkRequests: () => {
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
          const url = typeof args[0] === 'string' ? args[0] : 'unknown';
          
          // Check for suspicious requests
          if (url.includes('eval') || url.includes('script') || url.includes('javascript:')) {
            const event: SecurityEvent = {
              type: 'SUSPICIOUS_NETWORK_REQUEST',
              timestamp: new Date().toISOString(),
              details: { url }
            };
            setEvents(prev => [...prev, event]);
            handleClientError(new Error(`Suspicious network request: ${url}`), 'SecurityMonitor');
          }

          return originalFetch.apply(this, args);
        };
      }
    };

    // Initialize all security checks
    Object.values(securityChecks).forEach(check => {
      try {
        check();
      } catch (error) {
        handleClientError(error, 'SecurityMonitor');
      }
    });

    // Cleanup function
    return () => {
      // Restore original console methods if needed
      if (typeof window !== 'undefined' && window.console) {
        // Note: In a real implementation, you'd want to store and restore the original methods
      }
    };
  }, []);

  // In development, show security events
  if (process.env.NODE_ENV === 'development' && events.length > 0) {
    return (
      <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg shadow-lg z-50 max-w-sm">
        <h3 className="font-bold text-sm mb-2">Security Events ({events.length})</h3>
        <div className="text-xs space-y-1 max-h-32 overflow-y-auto">
          {events.slice(-5).map((event, index) => (
            <div key={index} className="border-b border-red-200 pb-1">
              <div className="font-semibold">{event.type}</div>
              <div className="text-red-600">{new Date(event.timestamp).toLocaleTimeString()}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // In production, don't render anything visible
  return null;
} 