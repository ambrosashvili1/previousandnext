let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

prevBtn.setAttribute("disabled", "");

let count = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    countUp: function() {
      changeBy(1);
    },
    countDown: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();


function moveTileRight() {
  let tile = document.querySelectorAll(".box");
  let listLength = tile.length - 1;

  count.countUp();

  let nextIndex = count.value();

  console.log(nextIndex);


  if (tile[nextIndex] !== undefined) {
    tile[nextIndex].after(tile[nextIndex - 1]);
  }


  let disableNextBtn = (nextIndex === listLength ? nextBtn.setAttribute("disabled", "") : prevBtn.removeAttribute("disabled"));
}


function moveTileLeft() {
  let tile = document.querySelectorAll(".box");

  count.countDown();

  let prevIndex = count.value();

  console.log(prevIndex);


  if (tile[prevIndex] !== undefined) {
    tile[prevIndex].before(tile[prevIndex + 1]);
  }

  let disablePrevBtn = (prevIndex === 0 ? prevBtn.setAttribute("disabled", "") : nextBtn.removeAttribute("disabled"));
}


nextBtn.addEventListener("click", moveTileRight);
prevBtn.addEventListener("click", moveTileLeft);


