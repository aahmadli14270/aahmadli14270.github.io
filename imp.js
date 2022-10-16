"use strict";

document.querySelector(".nav-links").addEventListener("click", function (e) {
  console.log(e.target);

  if (e.target.classList.contains("prv")) {
    console.log("everything ok!0");
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  e.preventDefault();
  if (e.target.classList.contains("linka")) {
    console.log("everything ok!1");
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".sct-btn1").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#section--2").scrollIntoView({ behavior: "smooth" });
});

const allSections = document.querySelectorAll("section");

console.log(...allSections);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((e) => sectionObserver.observe(e));

// const customerContainer = document.querySelector(".grid-container-customer");
const customerContainer = document.querySelector(".grid-container-customer");

const customerGenerator = function (data) {
  const html = `
  <div class="img-container-customer">
    <img src="${
      Object.values(data)[0][0].picture.large
    }" class="img-customer" />
    <div class="customer-info">
      <p class = "name-surname">${Object.values(data)[0][0].name.first} ${
    Object.values(data)[0][0].name.last
  }</p>
      <p class = "city-state-country">${
        Object.values(data)[0][0].location.city
      }, ${Object.values(data)[0][0].location.state}, ${
    Object.values(data)[0][0].location.country
  }</p>
    </div>
  </div>
  `;
  customerContainer.insertAdjacentHTML("beforeend", html);
};

const customerCall = function () {
  return fetch("https://randomuser.me/api/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(Object.values(data)[0][0].picture.large);
      customerGenerator(data);
      return fetch("https://randomuser.me/api/");
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(Object.values(data)[0][0].picture.large);
      customerGenerator(data);
      return fetch("https://randomuser.me/api/");
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(Object.values(data)[0][0].picture.large);
      customerGenerator(data);
      return fetch("https://randomuser.me/api/");
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(Object.values(data)[0][0].picture.large);
      customerGenerator(data);
      return fetch("https://randomuser.me/api/");
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(Object.values(data)[0][0].picture.large);
      customerGenerator(data);
      return fetch("https://randomuser.me/api/");
    });
};

//for (let i = 0; i < 5; i++) {
customerCall();
//}

//console.log(Object.values(data)[0][0].gender);

//console.log(data);
//https://randomuser.me/api/
// https://restcountries.com/v3.1/name/peru
// const data = null;

// const customerInfo = function () {
//   return fetch("https://randomuser.me/api/").then((fdata) => fdata.json());
// };
// console.log(customerInfo());
