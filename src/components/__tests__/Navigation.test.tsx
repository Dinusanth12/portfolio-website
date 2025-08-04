import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from '../Navigation'

describe('Navigation Component', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    })
  })

  it('renders navigation with all menu items', () => {
    render(<Navigation />)
    
    expect(screen.getByText('Dinusanth Surendran')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Hobbies')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Navigation />)
    
    // Check for social media icons (they should be present as buttons)
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks.length).toBeGreaterThan(5) // nav links + social links
  })

  it('has proper navigation structure', () => {
    render(<Navigation />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(nav).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50')
  })

  it('renders mobile menu button on smaller screens', () => {
    render(<Navigation />)
    
    // The menu button should be present for mobile
    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Navigation />)
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    
    // Should show close button
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('has correct navigation links with proper hrefs', () => {
    render(<Navigation />)
    
    const aboutLink = screen.getByText('About').closest('a')
    const projectsLink = screen.getByText('Projects').closest('a')
    const experienceLink = screen.getByText('Experience').closest('a')
    const hobbiesLink = screen.getByText('Hobbies').closest('a')
    const contactLink = screen.getByText('Contact').closest('a')
    
    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(projectsLink).toHaveAttribute('href', '#projects')
    expect(experienceLink).toHaveAttribute('href', '#experience')
    expect(hobbiesLink).toHaveAttribute('href', '#extracurriculars')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })
}) 