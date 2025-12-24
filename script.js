window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  preloader.classList.add("hide");
  document.body.classList.add("loaded");

  setTimeout(() => {
    preloader.remove();
  }, 600); // smooth fade only
});

/* FADE-IN OBSERVER */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

