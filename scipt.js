// Dimensional Scrolling with Smooth Effect
window.addEventListener('scroll', () => {
  document.querySelectorAll('.dimensional-section').forEach((section, index) => {
    section.style.transform = `translateY(${window.scrollY * (index + 1) * 0.15}px)`;
  });
});

// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById(this.getAttribute('href').substring(1)).scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in on Scroll Using Intersection Observer
const fadeInElements = document.querySelectorAll('.dimensional-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

fadeInElements.forEach(section => {
  observer.observe(section);
});

// Active Link Highlight on Scroll
window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY + 200;
  document.querySelectorAll('nav a').forEach(link => {
    let section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
      document.querySelectorAll('nav a').forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Back-to-Top Button
const backToTop = document.createElement('button');
backToTop.innerText = '↑';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

window.addEventListener('scroll', () => {
  backToTop.style.opacity = window.scrollY > 500 ? 1 : 0;
});

// Footer Dynamic Year
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("footer p").innerText = `© ${new Date().getFullYear()} Shivika Dhama`;
});

// Hamburger Menu Toggle for Mobile View
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});
