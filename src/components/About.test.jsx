import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the About Us heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
  })

  it('renders content about the chess academy', () => {
    render(<About />)
    expect(screen.getByText(/Welcome to Chess Academy/)).toBeInTheDocument()
    expect(screen.getByText(/passion meets strategy/)).toBeInTheDocument()
  })

  it('mentions group and one-to-one learning options', () => {
    render(<About />)
    expect(screen.getByText(/group setting/)).toBeInTheDocument()
    expect(screen.getByText(/one-to-one attention/)).toBeInTheDocument()
  })

  it('has correct id for navigation', () => {
    render(<About />)
    const section = document.querySelector('#about')
    expect(section).toBeInTheDocument()
  })
})
