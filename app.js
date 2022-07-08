const grid = document.querySelector(".grid");
const setGridBtn = document.querySelector(".mid .btn");
const bwBtn = document.querySelector(".left").firstElementChild;
const rbBtn = document.querySelector(".left").lastElementChild;
const eraseBtn = document.querySelector(".right").firstElementChild;
const clearBtn = document.querySelector(".right").lastElementChild;
let currGridSize = 3;

const renderGrid = (size) => {
  if (size == 1) {
    console.log(`rendergrid: ${currGridSize}`);
    for (const i of [...Array(10 * 10).keys()]) {
      const node = document.createElement("div");
      grid.appendChild(node);
    }
  }
};

const onSetGrid = () => {
  currGridSize = document.querySelector("input").value;
  console.log(`setgrid: ${currGridSize}`);
  renderGrid(currGridSize);
};

setGridBtn.addEventListener("click", onSetGrid);
