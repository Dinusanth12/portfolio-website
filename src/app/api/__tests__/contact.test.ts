import { NextRequest } from 'next/server'
import { POST } from '../contact/route'

// Mock Resend
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn(),
    },
  })),
}))

// Mock environment variables
process.env.RESEND_API_KEY = 'test-api-key'
process.env.CONTACT_EMAIL = 'test@example.com'
process.env.FROM_EMAIL = 'test@example.com'

describe('Contact API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('handles successful email sending', async () => {
    const mockResend = require('resend')
    mockResend.Resend.mockImplementation(() => ({
      emails: {
        send: jest.fn().mockResolvedValue({ id: 'test-id' }),
      },
    }))

    const requestBody = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.message).toContain('Message sent successfully')
  })

  it('handles missing required fields', async () => {
    const requestBody = {
      firstName: 'John',
      // Missing other required fields
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBeDefined()
  })

  it('handles invalid email format', async () => {
    const requestBody = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email',
      subject: 'Test Subject',
      message: 'Test message',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBeDefined()
  })

  it('handles Resend API errors', async () => {
    const mockResend = require('resend')
    mockResend.Resend.mockImplementation(() => ({
      emails: {
        send: jest.fn().mockRejectedValue(new Error('Resend API error')),
      },
    }))

    const requestBody = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.error).toBeDefined()
  })

  it('handles invalid JSON', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 'invalid-json',
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBeDefined()
  })

  it('applies security headers', async () => {
    const mockResend = require('resend')
    mockResend.Resend.mockImplementation(() => ({
      emails: {
        send: jest.fn().mockResolvedValue({ id: 'test-id' }),
      },
    }))

    const requestBody = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message',
    }

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const response = await POST(request)

    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff')
    expect(response.headers.get('X-Frame-Options')).toBe('DENY')
    expect(response.headers.get('X-XSS-Protection')).toBe('1; mode=block')
  })
}) 