let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const displayInfo = document.querySelector("#msg");
let userScores = document.querySelector("#user-score");
let compScores = document.querySelector("#comp-score");


const gameDraw = () => {
    displayInfo.innerText = "Game Draw.";
    displayInfo.style.backgroundColor = "black";

} 

const showWinner = (userWin) => {
    if(userWin){
        displayInfo.innerText = "You Won.";
        displayInfo.style.backgroundColor = "green";
        userScore++;
    } else {
        displayInfo.innerText = "You lost.";
        displayInfo.style.backgroundColor = "red";
        compScore++;
    }
}

const updateScore = () => {
    userScores.innerText = userScore;
    compScores.innerText = compScore;
}

const generateChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    // Generate a random choice for comp
     let compChoice = generateChoice();
    console.log(`Comp choice = ${compChoice}`);

    if(userChoice === compChoice){
        gameDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // compchoice = paper, scissors
            userWin = compChoice === "paper" ? false: true;
        } else if(userChoice === "paper"){
            // compChoice = rock, scissors
            userWin = compChoice === "rock"? true: false;
        } else {
            // userChoice = scissors
            // compChoice = rock, paper
            userWin = compChoice === "rock"? false: true;
        }
        showWinner(userWin);
    }
    updateScore();
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
})
    })
