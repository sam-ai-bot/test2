'use client';

export default function Courses() {
  const handleEnquireClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const courses = [
    {
      icon: '\u265E\u265E',
      title: 'Group Classes',
      description:
        'Learn chess in a collaborative environment with fellow enthusiasts. Our group classes foster healthy competition, peer learning, and strategic thinking.',
      features: [
        'Small batch sizes (6-10 students)',
        'Interactive group puzzles',
        'Regular tournaments',
        'All skill levels welcome',
      ],
    },
    {
      icon: '\u2654',
      title: 'One-to-One Classes',
      description:
        'Get personalized attention with dedicated one-on-one coaching. Perfect for focused improvement and customized learning paths tailored to your goals.',
      features: [
        'Personalized curriculum',
        'Flexible scheduling',
        'In-depth game analysis',
        'Rapid skill development',
      ],
    },
  ];

  return (
    <section id="courses" className="courses">
      <div className="container">
        <h2>Our Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-icon">
                <span className={index === 0 ? 'icon-group' : 'icon-individual'}>
                  {course.icon}
                </span>
              </div>
              <h3>{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <ul className="course-features">
                {course.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary" onClick={handleEnquireClick}>
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
