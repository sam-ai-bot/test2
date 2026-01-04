import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../HeroSection.vue'

describe('HeroSection', () => {
  it('renders the main heading', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('h1').text()).toBe('Chess Academy')
  })

  it('renders the tagline', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('.tagline').text()).toBe('Master the Art of Chess with Expert Guidance')
  })

  it('renders the CTA button', () => {
    const wrapper = mount(HeroSection)
    const btn = wrapper.find('.btn-primary')
    expect(btn.exists()).toBe(true)
    expect(btn.text()).toBe('Explore Courses')
    expect(btn.attributes('href')).toBe('#courses')
  })
})
