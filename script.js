document.addEventListener("DOMContentLoaded", () => {

  // ===== Typing Animation =====
  const typingElement = document.getElementById("typing-name");
  const text = "Sarthak Ghodake";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 120);
    }
  }

  if (typingElement) {
    typeText();
  }

  // ===== Scroll Reveal Animation =====
  const revealElements = document.querySelectorAll(
    ".reveal, .project-card, .skill-card, .hero-text"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  // ===== Skill Progress Bar Animation =====
  const progressBars = document.querySelectorAll(".progress-fill");

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.getAttribute("data-width");
          entry.target.style.width = targetWidth;
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  progressBars.forEach((bar) => {
    bar.style.width = "0";
    skillObserver.observe(bar);
  });

  // ===== Active Navbar Link Highlight =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);

  // ===== Smooth Navbar Close Effect for Mobile =====
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      updateActiveLink();
    });
  });

});