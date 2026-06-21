const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".page-hero-img");
  if (!heroImg) return;

  let scrollY = 0;

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
  });

  function animateHero() {
    const fadeDistance = window.innerHeight - 80; // header height
    const progress = Math.min(scrollY / fadeDistance, 1);

    heroImg.style.opacity = 1 - progress;
    heroImg.style.transform = `translateY(${progress * -100}px)`;

    requestAnimationFrame(animateHero);
  }

  animateHero();
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
    };

    emailjs.send(
      "service_cxn9teh",
      "template_7yriuvc",
      templateParams
    )

    emailjs.send(
      "service_cxn9teh",
      "template_2riomrt",
      templateParams
    )
    .then(() => {
      alert("Message sent!");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Error sending message");
    });
  });
});