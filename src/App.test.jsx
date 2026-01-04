import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  let intersectionCallback

  beforeEach(() => {
    window.scrollTo = vi.fn()

    // Mock IntersectionObserver
    const mockIntersectionObserver = vi.fn((callback) => {
      intersectionCallback = callback
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }
    })
    vi.stubGlobal('IntersectionObserver', mockIntersectionObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the header with Chess Academy brand', () => {
    render(<App />)
    expect(screen.getByText('Chess Academy', { selector: '.nav-brand a' })).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Chess Academy' })).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
  })

  it('renders the courses section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Courses' })).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/2024 Chess Academy/)).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(document.querySelector('#home')).toBeInTheDocument()
    expect(document.querySelector('#about')).toBeInTheDocument()
    expect(document.querySelector('#courses')).toBeInTheDocument()
    expect(document.querySelector('#contact')).toBeInTheDocument()
  })
})
