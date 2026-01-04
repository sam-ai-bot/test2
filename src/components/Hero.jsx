export default function Hero() {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('courses');
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Chess Academy</h1>
        <p className="tagline">Master the Art of Chess with Expert Guidance</p>
        <a href="#courses" className="btn btn-primary" onClick={handleClick}>
          Explore Courses
        </a>
      </div>
    </section>
  );
}
