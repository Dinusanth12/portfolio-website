import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }
  },
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <div {...domProps}>{children}</div>
    },
    nav: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <nav {...domProps}>{children}</nav>
    },
    a: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <a {...domProps}>{children}</a>
    },
    span: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <span {...domProps}>{children}</span>
    },
    h1: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <h1 {...domProps}>{children}</h1>
    },
    h2: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <h2 {...domProps}>{children}</h2>
    },
    h3: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <h3 {...domProps}>{children}</h3>
    },
    p: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <p {...domProps}>{children}</p>
    },
    button: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <button {...domProps}>{children}</button>
    },
    form: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <form {...domProps}>{children}</form>
    },
    input: (props) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <input {...domProps} />
    },
    textarea: (props) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <textarea {...domProps} />
    },
    label: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <label {...domProps}>{children}</label>
    },
    section: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <section {...domProps}>{children}</section>
    },
    main: ({ children, ...props }) => {
      const { initial, animate, transition, whileInView, viewport, ...domProps } = props
      return <main {...domProps}>{children}</main>
    },
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock environment variables
process.env.NEXT_PUBLIC_APP_URL = 'http://localhost:3000'
process.env.RESEND_API_KEY = 'test-api-key'
process.env.CONTACT_EMAIL = 'test@example.com'
process.env.FROM_EMAIL = 'test@example.com'

// Global test utilities
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})) 