import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/2024 Chess Academy/)).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the footer element', () => {
    render(<Footer />)
    const footer = document.querySelector('footer.footer')
    expect(footer).toBeInTheDocument()
  })
})
