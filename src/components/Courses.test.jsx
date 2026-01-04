import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Courses from './Courses'

describe('Courses', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  it('renders the Our Courses heading', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Courses' })).toBeInTheDocument()
  })

  it('renders Group Classes course card', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { level: 3, name: 'Group Classes' })).toBeInTheDocument()
  })

  it('renders One-to-One Classes course card', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { level: 3, name: 'One-to-One Classes' })).toBeInTheDocument()
  })

  it('renders course features for Group Classes', () => {
    render(<Courses />)
    expect(screen.getByText('Small batch sizes (6-10 students)')).toBeInTheDocument()
    expect(screen.getByText('Interactive group puzzles')).toBeInTheDocument()
    expect(screen.getByText('Regular tournaments')).toBeInTheDocument()
    expect(screen.getByText('All skill levels welcome')).toBeInTheDocument()
  })

  it('renders course features for One-to-One Classes', () => {
    render(<Courses />)
    expect(screen.getByText('Personalized curriculum')).toBeInTheDocument()
    expect(screen.getByText('Flexible scheduling')).toBeInTheDocument()
    expect(screen.getByText('In-depth game analysis')).toBeInTheDocument()
    expect(screen.getByText('Rapid skill development')).toBeInTheDocument()
  })

  it('renders two Enquire Now buttons', () => {
    render(<Courses />)
    const enquireButtons = screen.getAllByRole('link', { name: 'Enquire Now' })
    expect(enquireButtons).toHaveLength(2)
  })

  it('has correct id for navigation', () => {
    render(<Courses />)
    const section = document.querySelector('#courses')
    expect(section).toBeInTheDocument()
  })
})
