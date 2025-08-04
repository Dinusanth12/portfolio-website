import { render, screen } from '@testing-library/react'
import Extracurriculars from '../Extracurriculars'

describe('Extracurriculars Component', () => {
  it('renders hobbies section with main content', () => {
    render(<Extracurriculars />)
    
    expect(screen.getByText('Hobbies & Interests')).toBeInTheDocument()
    expect(screen.getByText(/UpNext Gen/i)).toBeInTheDocument()
    expect(screen.getByText(/Youth Coding Mentor/i)).toBeInTheDocument()
  })

  it('renders with proper structure', () => {
    render(<Extracurriculars />)
    
    const hobbiesSection = screen.getByRole('region')
    expect(hobbiesSection).toBeInTheDocument()
    expect(hobbiesSection).toHaveAttribute('id', 'extracurriculars')
  })

  it('displays organization information', () => {
    render(<Extracurriculars />)
    
    expect(screen.getByText('Non-Profit')).toBeInTheDocument()
    expect(screen.getByText('Local Community')).toBeInTheDocument()
  })

  it('shows impact metrics', () => {
    render(<Extracurriculars />)
    
    expect(screen.getByText(/Helped 200\+ students/i)).toBeInTheDocument()
    expect(screen.getByText(/30\+ students/i)).toBeInTheDocument()
  })

  it('displays core values', () => {
    render(<Extracurriculars />)
    
    expect(screen.getByText('Empowerment')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Excellence')).toBeInTheDocument()
    expect(screen.getByText('Community')).toBeInTheDocument()
  })

  it('shows role information', () => {
    render(<Extracurriculars />)
    
    expect(screen.getByText('Founder & CEO')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Lead')).toBeInTheDocument()
  })
}) 