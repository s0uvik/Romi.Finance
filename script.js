const menuContainer = document.querySelector(".menu_container");
const menuIcon = document.querySelector(".menu_icon");
const menuClose = document.querySelector(".menu_close");

menuIcon.addEventListener("click", () => {
  menuContainer.style.display = "flex";
});

menuClose.addEventListener("click", () => {
  menuContainer.style.display = "none";
});

const circle = document.querySelector(".circle");
const notStakedMessage = document.querySelector(".not_staked_message");
circle.addEventListener("mouseover", (e) => {
  notStakedMessage.style.display = "flex";
  if (e.target !== circle) notStakedMessage.style.display = "none";
});
circle.addEventListener("mouseout", (e) => {
  notStakedMessage.style.display = "none";
});
