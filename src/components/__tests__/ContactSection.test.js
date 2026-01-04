import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '../ContactSection.vue'

describe('ContactSection', () => {
  it('renders the Contact Us heading', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.find('h2').text()).toBe('Contact Us')
  })

  it('renders the address section', () => {
    const wrapper = mount(ContactSection)
    const address = wrapper.find('address')
    expect(address.exists()).toBe(true)
    expect(address.text()).toContain('Chennai')
    expect(address.text()).toContain('Tamil Nadu')
    expect(address.text()).toContain('India')
  })

  it('renders the enquiry section', () => {
    const wrapper = mount(ContactSection)
    const enquiry = wrapper.find('.enquiry')
    expect(enquiry.exists()).toBe(true)
    expect(enquiry.find('h3').text()).toBe('Get in Touch')
  })

  it('renders the email button', () => {
    const wrapper = mount(ContactSection)
    const emailBtn = wrapper.find('a.btn-secondary')
    expect(emailBtn.exists()).toBe(true)
    expect(emailBtn.attributes('href')).toBe('mailto:info@chessacademy.com')
  })
})
