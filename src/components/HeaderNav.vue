<script setup>
import { ref } from 'vue'

const isMenuActive = ref(false)

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value
  document.body.style.overflow = isMenuActive.value ? 'hidden' : ''
}

function closeMenu() {
  isMenuActive.value = false
  document.body.style.overflow = ''
}

function scrollToSection(event, targetId) {
  event.preventDefault()
  closeMenu()
  const targetElement = document.querySelector(targetId)
  if (targetElement) {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0
    const targetPosition = targetElement.offsetTop - headerHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-brand">
        <a href="#home">Chess Academy</a>
      </div>
      <button
        class="nav-toggle"
        :class="{ active: isMenuActive }"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="hamburger"></span>
      </button>
      <ul class="nav-menu" :class="{ active: isMenuActive }">
        <li><a href="#home" class="nav-link" @click="scrollToSection($event, '#home')">Home</a></li>
        <li><a href="#courses" class="nav-link" @click="scrollToSection($event, '#courses')">Courses</a></li>
        <li><a href="#about" class="nav-link" @click="scrollToSection($event, '#about')">About</a></li>
        <li><a href="#contact" class="nav-link" @click="scrollToSection($event, '#contact')">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
