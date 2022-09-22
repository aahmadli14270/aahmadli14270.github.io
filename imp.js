"use strict";

const linka = document.querySelectorAll(".linka");

const links = document.querySelector(".nav-links");
document.querySelector(".who").addEventListener("click", (e) => {
  document
    .querySelector(".section-hero")
    .scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".skl").addEventListener("click", (e) => {
  document.querySelector(".My-skills").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".cha").addEventListener("click", (e) => {
  document
    .querySelector(".section-chars")
    .scrollIntoView({ behavior: "smooth" });
});
