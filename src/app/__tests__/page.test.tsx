import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />)
    
    // Check for navigation
    expect(screen.getAllByText('Dinusanth Surendran')).toHaveLength(2)
    
    // Check for main sections
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Hobbies')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders with proper structure', () => {
    render(<Home />)
    
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveClass('min-h-screen')
  })

  it('renders all required components', () => {
    render(<Home />)
    
    // Check for key content from each section
    expect(screen.getAllByText(/Let's Connect/i)).toHaveLength(2) // Contact section
    expect(screen.getAllByText(/Download Resume/i)).toHaveLength(2) // Resume download
  })
}) 