import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutSection from '../AboutSection.vue'

describe('AboutSection', () => {
  it('renders the About Us heading', () => {
    const wrapper = mount(AboutSection)
    expect(wrapper.find('h2').text()).toBe('About Us')
  })

  it('renders description paragraphs', () => {
    const wrapper = mount(AboutSection)
    const paragraphs = wrapper.findAll('p')
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)
    expect(paragraphs[0].text()).toContain('Chess Academy')
  })
})
