const box = document.querySelectorAll(".box");

for (let item of box) {
  item.addEventListener("mouseenter", () => {
    item.classList.add("active");
  });
}

// Homework 2

const boxClone = document.querySelector(".boxClone");
const inputW = document.querySelector(".inpWidth");
const inputH = document.querySelector(".inpHeight");
const inputB = document.querySelector(".inpBgcolor");
const btn = document.querySelector("button");

inputW.onchange = (e) => {
  let width = e.target.value.concat("px");

  boxClone.style.width = width;
};

inputH.onchange = (e) => {
  let height = e.target.value.concat("px");

  boxClone.style.height = height;
};

inputB.onchange = (e) => {
  let color = e.target.value;

  boxClone.style.backgroundColor = color;
};

btn.onmouseenter = () => {
  btn.style.backgroundColor = "rgb(41, 41, 87)";
};
btn.onmouseleave = () => {
  btn.style.backgroundColor = "rgb(82, 82, 212)"
  btn.style.transform = 'scale(1)'
};
btn.onclick = () => {
    btn.style.transform = 'scale(0.97)'
}