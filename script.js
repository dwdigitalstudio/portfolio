/* DW Digital Studio — script.js
   Small, defensive JS for a professional landing page.
*/

"use strict";

// Opt-in class for CSS animations (prevents "blank hero" if JS fails)
document.documentElement.classList.add("js");

// Smooth scroll for internal links with [data-scroll]
document.querySelectorAll("a[data-scroll]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    // Only handle in-page anchor links like "#contact"
    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Reveal hero ASAP (do not wait for images like window.load)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (hero) hero.classList.add("show");
});

// Button click feedback (subtle)
document.querySelectorAll(".hero .btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    window.setTimeout(() => btn.classList.remove("clicked"), 150);
  });
});