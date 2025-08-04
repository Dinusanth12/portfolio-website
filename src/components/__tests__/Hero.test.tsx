import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero Component', () => {
  it('renders hero section with main content', () => {
    render(<Hero />)
    
    expect(screen.getByText('Dinusanth Surendran')).toBeInTheDocument()
    expect(screen.getByText(/Backend Engineer/i)).toBeInTheDocument()
    expect(screen.getByText(/Seeking May 2026 Co-op\/Internship/i)).toBeInTheDocument()
  })

  it('renders hero section with proper structure', () => {
    render(<Hero />)
    
    const heroSection = screen.getByRole('banner')
    expect(heroSection).toBeInTheDocument()
    expect(heroSection).toHaveAttribute('id', 'hero')
  })

  it('renders status badge', () => {
    render(<Hero />)
    
    const statusBadge = screen.getByText(/Seeking May 2026 Co-op\/Internship/i)
    expect(statusBadge).toBeInTheDocument()
    expect(statusBadge.closest('div')).toHaveClass('relative', 'z-10')
  })

  it('renders call-to-action buttons', () => {
    render(<Hero />)
    
    expect(screen.getByText('View Projects')).toBeInTheDocument()
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
  })

  it('has proper navigation links', () => {
    render(<Hero />)
    
    const projectsLink = screen.getByText('View Projects').closest('a')
    const contactLink = screen.getByText('Get in Touch').closest('a')
    
    expect(projectsLink).toHaveAttribute('href', '#projects')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  it('renders with proper spacing', () => {
    render(<Hero />)
    
    const heroSection = screen.getByRole('banner')
    expect(heroSection).toHaveClass('pt-24') // Should have top padding
  })
}) 