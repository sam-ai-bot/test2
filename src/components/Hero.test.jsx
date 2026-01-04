import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: 'Chess Academy' })).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText('Master the Art of Chess with Expert Guidance')).toBeInTheDocument()
  })

  it('renders the Explore Courses button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Explore Courses' })).toBeInTheDocument()
  })

  it('has correct id for navigation', () => {
    render(<Hero />)
    const section = document.querySelector('#home')
    expect(section).toBeInTheDocument()
  })

  it('Explore Courses button links to courses section', () => {
    render(<Hero />)
    const button = screen.getByRole('link', { name: 'Explore Courses' })
    expect(button).toHaveAttribute('href', '#courses')
  })
})
