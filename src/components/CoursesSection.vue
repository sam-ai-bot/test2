<script setup>
const courses = [
  {
    title: 'Group Classes',
    icon: '\u265E\u265E',
    description: 'Learn chess in a collaborative environment with fellow enthusiasts. Our group classes foster healthy competition, peer learning, and strategic thinking.',
    features: [
      'Small batch sizes (6-10 students)',
      'Interactive group puzzles',
      'Regular tournaments',
      'All skill levels welcome'
    ]
  },
  {
    title: 'One-to-One Classes',
    icon: '\u2654',
    description: 'Get personalized attention with dedicated one-on-one coaching. Perfect for focused improvement and customized learning paths tailored to your goals.',
    features: [
      'Personalized curriculum',
      'Flexible scheduling',
      'In-depth game analysis',
      'Rapid skill development'
    ]
  }
]
</script>

<template>
  <section id="courses" class="courses">
    <div class="container">
      <h2>Our Courses</h2>
      <div class="courses-grid">
        <div
          v-for="(course, index) in courses"
          :key="index"
          class="course-card"
        >
          <div class="course-icon">
            <span :class="index === 0 ? 'icon-group' : 'icon-individual'">{{ course.icon }}</span>
          </div>
          <h3>{{ course.title }}</h3>
          <p class="course-description">{{ course.description }}</p>
          <ul class="course-features">
            <li v-for="(feature, fIndex) in course.features" :key="fIndex">{{ feature }}</li>
          </ul>
          <a href="#contact" class="btn btn-primary">Enquire Now</a>
        </div>
      </div>
    </div>
  </section>
</template>
