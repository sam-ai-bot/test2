import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CoursesSection from '../CoursesSection.vue'

describe('CoursesSection', () => {
  it('renders the Our Courses heading', () => {
    const wrapper = mount(CoursesSection)
    expect(wrapper.find('h2').text()).toBe('Our Courses')
  })

  it('renders two course cards', () => {
    const wrapper = mount(CoursesSection)
    const cards = wrapper.findAll('.course-card')
    expect(cards.length).toBe(2)
  })

  it('renders Group Classes card', () => {
    const wrapper = mount(CoursesSection)
    const cards = wrapper.findAll('.course-card')
    expect(cards[0].find('h3').text()).toBe('Group Classes')
  })

  it('renders One-to-One Classes card', () => {
    const wrapper = mount(CoursesSection)
    const cards = wrapper.findAll('.course-card')
    expect(cards[1].find('h3').text()).toBe('One-to-One Classes')
  })

  it('renders features for each course', () => {
    const wrapper = mount(CoursesSection)
    const featureLists = wrapper.findAll('.course-features')
    expect(featureLists.length).toBe(2)
    expect(featureLists[0].findAll('li').length).toBe(4)
    expect(featureLists[1].findAll('li').length).toBe(4)
  })
})
