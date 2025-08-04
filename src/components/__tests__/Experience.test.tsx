import { render, screen } from '@testing-library/react'
import Experience from '../Experience'

describe('Experience Component', () => {
  it('renders experience section with main content', () => {
    render(<Experience />)
    
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText(/Automation Analyst/i)).toBeInTheDocument()
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument()
  })

  it('renders with proper structure', () => {
    render(<Experience />)
    
    const experienceSection = screen.getByRole('region')
    expect(experienceSection).toBeInTheDocument()
    expect(experienceSection).toHaveAttribute('id', 'experience')
  })

  it('displays company information', () => {
    render(<Experience />)
    
    expect(screen.getByText('Royal Bank of Canada')).toBeInTheDocument()
    expect(screen.getByText('LB Connect – Mortgage Startup')).toBeInTheDocument()
  })

  it('shows job durations', () => {
    render(<Experience />)
    
    expect(screen.getByText(/May 2025 - Dec 2025/i)).toBeInTheDocument()
    expect(screen.getByText(/July 2025 - Present/i)).toBeInTheDocument()
  })

  it('displays achievements', () => {
    render(<Experience />)
    
    expect(screen.getByText(/Reduced data processing time by 90%/i)).toBeInTheDocument()
    expect(screen.getByText(/Maintained <5% bug regression rate/i)).toBeInTheDocument()
  })
}) 