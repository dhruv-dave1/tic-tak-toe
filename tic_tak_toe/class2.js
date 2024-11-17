let boxes = document.querySelectorAll(".box");
let click = true;

const winning = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (click) {
      box.innerText = "X";
      click = false;
    } else {
      box.innerText = "O";
      click = true;
    }
    box.disabled = true;
    winner();
  });
});

function winner() {
  for (let win of winning) {
    let position1 = boxes[win[0]].innerText;
    let position2 = boxes[win[1]].innerText;
    let position3 = boxes[win[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        console.log("winner", position1);
      }
    }
  }
}
