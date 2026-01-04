<script setup>
import { onMounted, onUnmounted } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import CoursesSection from './components/CoursesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

// Scroll-triggered fade-in animations
let fadeObserver = null

onMounted(() => {
  const fadeElements = document.querySelectorAll('.about, .courses, .contact')

  fadeElements.forEach((element) => {
    element.classList.add('fade-in')
  })

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        fadeObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  fadeElements.forEach((element) => {
    fadeObserver.observe(element)
  })
})

onUnmounted(() => {
  if (fadeObserver) {
    fadeObserver.disconnect()
  }
})
</script>

<template>
  <HeaderNav />
  <main>
    <HeroSection />
    <AboutSection />
    <CoursesSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>
