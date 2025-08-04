import { render, screen } from '@testing-library/react'
import Projects from '../Projects'

describe('Projects Component', () => {
  it('renders projects section with main content', () => {
    render(<Projects />)
    
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText(/Inbox-To-Insights/i)).toBeInTheDocument()
    expect(screen.getByText(/Quant Backtester Pro/i)).toBeInTheDocument()
  })

  it('renders with proper structure', () => {
    render(<Projects />)
    
    const projectsSection = screen.getByRole('region')
    expect(projectsSection).toBeInTheDocument()
    expect(projectsSection).toHaveAttribute('id', 'projects')
  })

  it('displays project technologies', () => {
    render(<Projects />)
    
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('GPT')).toBeInTheDocument()
    expect(screen.getByText('Streamlit')).toBeInTheDocument()
  })

  it('shows project impact metrics', () => {
    render(<Projects />)
    
    expect(screen.getByText(/Saved users 8 hours per week/i)).toBeInTheDocument()
    expect(screen.getByText(/Increased code testability by 85%/i)).toBeInTheDocument()
  })

  it('renders project links', () => {
    render(<Projects />)
    
    const viewButtons = screen.getAllByText(/View Project/i)
    expect(viewButtons.length).toBeGreaterThan(0)
  })
}) 