let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetButton");
let newButton = document.querySelector("#newButton");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
let count = 0; // to check draw condition
 const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
 ];
 const resetGame = () =>{
    turnO = true;
    count = 0;
    enableButtons();
    msgContainer.classList.add("hide");
 }
 const disableButtons = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
 }

 const enableButtons = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        
        let isDraw = !checkWinner();
        if(count === 9 && isDraw){
            gameDraw();
        }

    })
 });
    const gameDraw = () =>{
        msg.innerText = "Game draw.";
        msgContainer.classList.remove("hide");
        disableButtons();
    }

    const showWinner = (winner) => {
        msg.innerText = `Congratulations! ${winner}`;
        msgContainer.classList.remove("hide");
        disableButtons();
    }

 const checkWinner = () => {
    for(let pattern  of winPatterns){
        let val0 = boxes[pattern[0]].innerText; 
        let val1 = boxes[pattern[1]].innerText; 
        let val2 = boxes[pattern[2]].innerText;
         
        if(val0 !== "" && val1 !== "" && val2 !== ""){
            if(val0 === val1 && val1 === val2){
                console.log(`${val0} is the WINNER`);
                showWinner(val0);
                return true;
            }
        }
    }
    return false;
 }
 newButton.addEventListener("click", resetGame);
 resetButton.addEventListener("click", resetGame);