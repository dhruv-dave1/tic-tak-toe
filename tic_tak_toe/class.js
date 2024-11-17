let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-btn");
let messageContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = ()=>{
  turn = true;
  count = 0;
  enable();
  messageContainer.classList.add("hide");
};

const enable = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === true) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    winner();
  });
});



const disable = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}

const showWinner = (winner) =>{
  msg.innerText = `congratulation,winner is ${winner}`;
  messageContainer.classList.remove("hide");
  disable();
}

function winner() {
  for (let win of winpattern) {
    let pos1val = boxes[win[0]].innerText;
    let pos2val = boxes[win[1]].innerText;
    let pos3val = boxes[win[2]].innerText;

    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
          showWinner(pos1val);

        }
    };
  };
};

reset.addEventListener("click",resetgame);
newGameBtn.addEventListener("click",resetgame);