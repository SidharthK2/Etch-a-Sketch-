const grid = document.querySelector(".grid");
const setGridBtn = document.querySelector(".mid .btn");
const bwBtn = document.querySelector(".left").firstElementChild;
const rbBtn = document.querySelector(".left").lastElementChild;
const eraseBtn = document.querySelector(".right").firstElementChild;
const clearBtn = document.querySelector(".right").lastElementChild;
let currGridSize = 3;
let colorMode = "bw";

const renderGrid = (size) => {
  if (size == 1) {
    for (const i of [...Array(10 * 10).keys()]) {
      const node = document.createElement("div");
      grid.appendChild(node);
    }
  }
};

const onSetGrid = () => {
  currGridSize = document.querySelector("input").value;
  renderGrid(currGridSize);
};

const colorSelect = (mode) => {
  colorMode = mode;
  console.log(colorMode);
};

let colorFill = () => {
    console.log("entered colorfill");
  if (colorMode == "bw") {
    grid.onmouseover = (e) => {
      e.target.classList.add("bwColor");
    };
  }
};

let mouseOverFun;
const doNothing = () => {console.log("enter do nothing");};

setGridBtn.addEventListener("click", onSetGrid);
bwBtn.addEventListener("click", colorSelect.bind(this, "bw"));
rbBtn.addEventListener("click", colorSelect.bind(this, "rb"));
// grid.addEventListener("mousedown", (e) => {
//   console.log(e.target);
//   grid.addEventListener("mouseover", (e) => {
//     console.log(e.target);
//   });
// });
grid.onmousedown = () => {
    colorFill();
  console.log("executed mouseoverfun");
};
grid.onmouseup = () => {
    let divs = document.body.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].onmouseover = function() {};
    }
};
