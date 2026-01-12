/* ===============================
   Portfolio Main JavaScript
   Author: Md Nazir Raza
================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ====== Select Elements ====== */
  const header = document.querySelector("header");
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const darkModeBtn = document.querySelector("#darkmode");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  /* ====== Sticky Header Shadow ====== */
  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 50);
  });

  /* ====== Mobile Menu Toggle ====== */
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });

  /* ====== Close Menu on Scroll ====== */
  window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });

  /* ====== Active Nav Link on Scroll ====== */
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  /* ====== Dark Mode (With Local Storage) ====== */
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("active");
    darkModeBtn.classList.replace("bx-moon", "bx-sun");
  }

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("active");

    if (document.body.classList.contains("active")) {
      darkModeBtn.classList.replace("bx-moon", "bx-sun");
      localStorage.setItem("theme", "dark");
    } else {
      darkModeBtn.classList.replace("bx-sun", "bx-moon");
      localStorage.setItem("theme", "light");
    }
  });

  /* ====== Scroll Reveal Animation ====== */
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // initial load
});
