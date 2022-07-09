const grid = document.querySelector(".grid");
const setGridBtn = document.querySelector(".mid .btn");
const bwBtn = document.querySelector(".left").firstElementChild;
const rbBtn = document.querySelector(".left").lastElementChild;
const eraseBtn = document.querySelector(".right").firstElementChild;
const clearBtn = document.querySelector(".right").lastElementChild;
let currGridSize = 3;
let colorMode = "bw";

const resetGrid = () => {
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }
};

const renderGrid = (size) => {
  if (size == 4) {
    for (const i of [...Array(10 * 10).keys()]) {
      const node = document.createElement("div");
      grid.appendChild(node);
    }
  } else if (size == 3) {
    for (const i of [...Array(25 * 25).keys()]) {
      const node = document.createElement("div");
      node.classList.add("size2");
      grid.appendChild(node);
    }
  } else if (size == 2) {
    for (const i of [...Array(50 * 50).keys()]) {
      const node = document.createElement("div");
      node.classList.add("size3");
      grid.appendChild(node);
    }
  } else if (size == 1) {
    for (const i of [...Array(100 * 100).keys()]) {
      const node = document.createElement("div");
      node.classList.add("size4");
      grid.appendChild(node);
    }
  }
};

const onSetGrid = () => {
  resetGrid();
  currGridSize = document.querySelector("input").value;
  renderGrid(currGridSize);
};

const colorSelect = (mode) => {
  colorMode = mode;
  console.log(colorMode);
};

let colorFill = () => {
  if (colorMode == "bw") {
    grid.onmouseover = (e) => {
      if (e.target.id != "grid") {
        e.target.style.backgroundColor = "#212d2c";
      }
    };
  } else if (colorMode == "rb") {
    grid.onmouseover = (e) => {
      if (e.target.id != "grid") {
        colorChoice = [
          "violet",
          "Indigo",
          "aqua",
          "GreenYellow",
          "Yellow",
          "red",
        ];
        e.target.style.backgroundColor =
          colorChoice[Math.floor(Math.random() * colorChoice.length)];
      }
    };
  }
};

const onClear = () => {
  grid.childNodes.forEach((node) => {
    node.style.backgroundColor = "white";
  });
};

setGridBtn.addEventListener("click", onSetGrid);
bwBtn.addEventListener("click", colorSelect.bind(this, "bw"));
rbBtn.addEventListener("click", colorSelect.bind(this, "rb"));
grid.onmousedown = () => {
  colorFill();
};
grid.onmouseup = () => {
  let divs = document.body.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
    divs[i].onmouseover = function () {};
  }
};
clearBtn.addEventListener("click", onClear);
