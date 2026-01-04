<script setup>
const socialLinks = [
  { label: 'Facebook', abbr: 'FB', href: '#' },
  { label: 'Twitter', abbr: 'TW', href: '#' },
  { label: 'Instagram', abbr: 'IG', href: '#' }
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <p>&copy; 2024 Chess Academy. All rights reserved.</p>
        </div>
        <div class="footer-social">
          <a
            v-for="(link, index) in socialLinks"
            :key="index"
            :href="link.href"
            :aria-label="link.label"
          >{{ link.abbr }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
