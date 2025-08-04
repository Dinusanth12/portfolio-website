import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About Component', () => {
  it('renders about section with main content', () => {
    render(<About />)
    
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(/Backend Engineer/i)).toBeInTheDocument()
  })

  it('renders skills section', () => {
    render(<About />)
    
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Technologies')).toBeInTheDocument()
  })

  it('renders with proper structure', () => {
    render(<About />)
    
    const aboutSection = screen.getByRole('region')
    expect(aboutSection).toBeInTheDocument()
    expect(aboutSection).toHaveAttribute('id', 'about')
  })

  it('displays personal information', () => {
    render(<About />)
    
    // Check for key personal info
    expect(screen.getByText(/McMaster University/i)).toBeInTheDocument()
    expect(screen.getByText(/Computer Science/i)).toBeInTheDocument()
  })
}) 