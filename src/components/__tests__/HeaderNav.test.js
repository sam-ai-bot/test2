import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderNav from '../HeaderNav.vue'

describe('HeaderNav', () => {
  it('renders the brand name', () => {
    const wrapper = mount(HeaderNav)
    expect(wrapper.find('.nav-brand').text()).toBe('Chess Academy')
  })

  it('renders navigation links', () => {
    const wrapper = mount(HeaderNav)
    const links = wrapper.findAll('.nav-link')
    expect(links.length).toBe(4)
    expect(links[0].text()).toBe('Home')
    expect(links[1].text()).toBe('Courses')
    expect(links[2].text()).toBe('About')
    expect(links[3].text()).toBe('Contact')
  })

  it('toggles mobile menu on click', async () => {
    const wrapper = mount(HeaderNav)
    const toggle = wrapper.find('.nav-toggle')
    const menu = wrapper.find('.nav-menu')

    expect(menu.classes()).not.toContain('active')
    await toggle.trigger('click')
    expect(menu.classes()).toContain('active')
    await toggle.trigger('click')
    expect(menu.classes()).not.toContain('active')
  })
})
