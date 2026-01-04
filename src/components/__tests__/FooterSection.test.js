import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterSection from '../FooterSection.vue'

describe('FooterSection', () => {
  it('renders the copyright text', () => {
    const wrapper = mount(FooterSection)
    expect(wrapper.find('.footer-brand').text()).toContain('Chess Academy')
    expect(wrapper.find('.footer-brand').text()).toContain('All rights reserved')
  })

  it('renders social links', () => {
    const wrapper = mount(FooterSection)
    const socialLinks = wrapper.findAll('.footer-social a')
    expect(socialLinks.length).toBe(3)
    expect(socialLinks[0].text()).toBe('FB')
    expect(socialLinks[1].text()).toBe('TW')
    expect(socialLinks[2].text()).toBe('IG')
  })
})
