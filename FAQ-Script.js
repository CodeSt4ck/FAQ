let q1Open = document.querySelector(".q1 .open");
let q1Close = document.querySelector(".q1 .close");
let a1 = document.querySelector(".a1");

let q2Open = document.querySelector(".q2 .open");
let q2Close = document.querySelector(".q2 .close");
let a2 = document.querySelector(".a2");

let q3Open = document.querySelector(".q3 .open");
let q3Close = document.querySelector(".q3 .close");
let a3 = document.querySelector(".a3");

let q4Open = document.querySelector(".q4 .open");
let q4Close = document.querySelector(".q4 .close");
let a4 = document.querySelector(".a4");

q1Open.addEventListener("click", () => {
  a1.style.display = "flex";
  q1Open.style.display = "none";
  q1Close.style.display = "flex";
});

q1Close.addEventListener("click", () => {
  a1.style.display = "none";
  q1Open.style.display = "flex";
  q1Close.style.display = "none";
});

q2Open.addEventListener("click", () => {
  a2.style.display = "flex";
  q2Open.style.display = "none";
  q2Close.style.display = "flex";
});

q2Close.addEventListener("click", () => {
  a2.style.display = "none";
  q2Open.style.display = "flex";
  q2Close.style.display = "none";
});

q3Open.addEventListener("click", () => {
  a3.style.display = "flex";
  q3Open.style.display = "none";
  q3Close.style.display = "flex";
});

q3Close.addEventListener("click", () => {
  a3.style.display = "none";
  q3Open.style.display = "flex";
  q3Close.style.display = "none";
});

q4Open.addEventListener("click", () => {
  a4.style.display = "flex";
  q4Open.style.display = "none";
  q4Close.style.display = "flex";
});

q4Close.addEventListener("click", () => {
  a4.style.display = "none";
  q4Open.style.display = "flex";
  q4Close.style.display = "none";
});
