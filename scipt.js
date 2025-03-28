// Basic parallax effect on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.dimensional-section');
    sections.forEach((section, index) => {
      let speed = (index + 1) * 0.2;  // Gradually increase speed for each section
      section.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
  });
  // Enable smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
