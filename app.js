
const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const cover = document.querySelector(".cover img");
const description = document.querySelector(".info h3");
const aliases = document.querySelector(".aliases");

//Moving Animation Event
container.addEventListener("mousemove", (event) => {
  let xAxis = - (window.innerWidth / 2 - event.pageX) / 40;
  let yAxis = - (window.innerHeight / 2 - event.pageY) / 40;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (event) =>
{
  card.style.transition = "none";
  title.style.transform = "translateZ(100px)";
  cover.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(75px)";
  aliases.style.transform = "translateZ(100px)";
});

//Animate Out
container.addEventListener("mouseleave", (event) =>
{
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  cover.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  aliases.style.transform = "translateZ(0px)";
});
