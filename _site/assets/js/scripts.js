// Updated scripts.js for Smooth Animations and Interactivity

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('header a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Scroll-triggered animations
  const sections = document.querySelectorAll('section');
  const revealSection = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= windowHeight * 0.8) {
        section.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealSection);
  revealSection(); // Initial check

  // Button click animations
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.95)';
    });
    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });

  // Page transition animations
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('#') && !href.startsWith('http')) {
        event.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => {
          window.location.href = href;
        }, 500); // Match this with CSS transition duration if added
      }
    });
  });
});
