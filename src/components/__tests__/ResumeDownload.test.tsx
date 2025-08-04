import { render, screen } from '@testing-library/react'
import ResumeDownload from '../ResumeDownload'

describe('ResumeDownload Component', () => {
  it('renders resume download section', () => {
    render(<ResumeDownload />)
    
    expect(screen.getByText('Download Resume')).toBeInTheDocument()
    expect(screen.getByText('Get my latest resume with detailed experience and skills')).toBeInTheDocument()
  })

  it('renders download buttons', () => {
    render(<ResumeDownload />)
    
    expect(screen.getByText('Download Resume')).toBeInTheDocument()
    expect(screen.getByText('View in Browser')).toBeInTheDocument()
  })

  it('has correct download link', () => {
    render(<ResumeDownload />)
    
    const downloadLink = screen.getByText('Download Resume').closest('a')
    expect(downloadLink).toHaveAttribute('href', '/resume.pdf')
    expect(downloadLink).toHaveAttribute('download', 'Dinusanth_Surendran_Resume.pdf')
  })

  it('has correct view in browser link', () => {
    render(<ResumeDownload />)
    
    const viewLink = screen.getByText('View in Browser').closest('a')
    expect(viewLink).toHaveAttribute('href', '/resume.pdf')
    expect(viewLink).toHaveAttribute('target', '_blank')
    expect(viewLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders with proper styling', () => {
    render(<ResumeDownload />)
    
    const container = screen.getByText('Download Resume').closest('div')
    expect(container).toHaveClass('card-professional')
  })

  it('shows file format information', () => {
    render(<ResumeDownload />)
    
    expect(screen.getByText('PDF Format • Updated Regularly')).toBeInTheDocument()
  })

  it('renders download icon', () => {
    render(<ResumeDownload />)
    
    // The download icon should be present in the button
    const downloadButton = screen.getByText('Download Resume').closest('a')
    expect(downloadButton).toBeInTheDocument()
  })
}) 