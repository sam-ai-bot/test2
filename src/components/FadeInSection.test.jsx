import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import FadeInSection from './FadeInSection'

describe('FadeInSection', () => {
  let intersectionCallback

  beforeEach(() => {
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

  it('renders children content', () => {
    render(
      <FadeInSection>
        <div>Test Content</div>
      </FadeInSection>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('starts with fade-in class but not visible', () => {
    render(
      <FadeInSection>
        <div>Test Content</div>
      </FadeInSection>
    )
    const wrapper = screen.getByText('Test Content').parentElement
    expect(wrapper.classList.contains('fade-in')).toBe(true)
    expect(wrapper.classList.contains('visible')).toBe(false)
  })

  it('adds visible class when element intersects', () => {
    render(
      <FadeInSection>
        <div>Test Content</div>
      </FadeInSection>
    )

    const wrapper = screen.getByText('Test Content').parentElement

    // Simulate intersection
    act(() => {
      intersectionCallback([{ isIntersecting: true, target: wrapper }])
    })

    expect(wrapper.classList.contains('visible')).toBe(true)
  })
})
