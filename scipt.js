// Enhanced Dimensional Scrolling with Depth Effect
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.dimensional-section');
  sections.forEach((section, index) => {
      let speed = (index + 1) * 0.15; // Adjusted speed for a smoother effect
      section.style.transform = `translateY(${window.scrollY * speed}px) scale(1.02)`;
  });
});

// Smooth scrolling between sections
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// Improved Fade-in Effect on Scroll
const fadeInElements = document.querySelectorAll('.dimensional-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
      }
  });
}, { threshold: 0.3 });

fadeInElements.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
  observer.observe(section);
});

// Highlight Active Section in Navigation
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

// Back-to-Top Button for Easy Navigation
const backToTop = document.createElement('button');
backToTop.innerText = '↑';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTop.style.opacity = window.scrollY > 500 ? 1 : 0;
});

// CSS for Back-to-Top Button (Include in CSS file)
const style = document.createElement('style');
style.innerHTML = `
  .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #5ac18e;
      color: #fff;
      border: none;
      padding: 10px 15px;
      font-size: 1.5rem;
      cursor: pointer;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1000;
  }
  .back-to-top:hover {
      background: #48a97d;
  }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function() {
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} Shivika Dhama | Web Developer Portfolio`;
});
