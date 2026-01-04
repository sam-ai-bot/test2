import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the Contact Us heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders the Visit Us subheading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 3, name: 'Visit Us' })).toBeInTheDocument()
  })

  it('renders the Get in Touch subheading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 3, name: 'Get in Touch' })).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Contact />)
    expect(screen.getByText(/Chess Circle/)).toBeInTheDocument()
    expect(screen.getByText(/Chennai, Tamil Nadu/)).toBeInTheDocument()
    expect(screen.getByText(/India/)).toBeInTheDocument()
  })

  it('renders the Email Us button with correct href', () => {
    render(<Contact />)
    const emailButton = screen.getByRole('link', { name: 'Email Us' })
    expect(emailButton).toBeInTheDocument()
    expect(emailButton).toHaveAttribute('href', 'mailto:info@chessacademy.com')
  })

  it('has correct id for navigation', () => {
    render(<Contact />)
    const section = document.querySelector('#contact')
    expect(section).toBeInTheDocument()
  })
})
