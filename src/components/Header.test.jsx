import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  beforeEach(() => {
    // Mock scrollTo
    window.scrollTo = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the Chess Academy brand', () => {
    render(<Header />)
    expect(screen.getByText('Chess Academy')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has a toggle button for mobile navigation', () => {
    render(<Header />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    expect(toggleButton).toBeInTheDocument()
  })

  it('toggles menu open/close when toggle button is clicked', () => {
    render(<Header />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })

    // Initially menu should not have 'active' class
    const navMenu = document.querySelector('.nav-menu')
    expect(navMenu.classList.contains('active')).toBe(false)

    // Click to open
    fireEvent.click(toggleButton)
    expect(navMenu.classList.contains('active')).toBe(true)

    // Click to close
    fireEvent.click(toggleButton)
    expect(navMenu.classList.contains('active')).toBe(false)
  })

  it('renders navigation links with correct href attributes', () => {
    render(<Header />)

    const homeLink = screen.getByText('Home').closest('a')
    const coursesLink = screen.getByText('Courses').closest('a')
    const aboutLink = screen.getByText('About').closest('a')
    const contactLink = screen.getByText('Contact').closest('a')

    expect(homeLink).toHaveAttribute('href', '#home')
    expect(coursesLink).toHaveAttribute('href', '#courses')
    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })
})
