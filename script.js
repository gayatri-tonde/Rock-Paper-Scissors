const choices = ["rock", "paper", "scissor"];
let compScore = 0; 
let userScore = 0;
let round = 0;

function getComputerChoice(){
    let compChoice = choices[Math.floor(Math.random() * 3)];
    console.log("computer choice: ", compChoice);
    return compChoice;
} 
alert("RULES:\n" +
    "1. Each game will have 5 rounds.\n" +
    "2. In each round player must select any one button as choice.\n" +
    "3. If it is a tie, then the round will be played again.\n" +
    "4. After each round the score will be displayed.");
    
function playround(userChoice) {

    const compChoice = getComputerChoice();
    document.querySelector("#compChoice").innerHTML = "Choice: " + compChoice;

    if (userChoice == compChoice) {
        alert("It's a tie! Play again.");   
    }
    else {
        if (compChoice == "rock" && userChoice == "paper" ||
            compChoice == "paper" && userChoice == "scissor" ||
            compChoice == "scissor" && userChoice == "rock") {
            //console.log("You win!");
            userScore++;
        }
        if (compChoice == "rock" && userChoice == "scissor" ||
            compChoice == "paper" && userChoice == "rock" ||
            compChoice == "scissor" && userChoice == "paper") {
            //console.log("You lose!");
            compScore++;
        }
        round++;
    }
    
    document.querySelector("#userScore").innerHTML = "Round "+ round+ ": " + userScore;
    document.querySelector("#compScore").innerHTML = "Round "+ round+ ": " + compScore;

    if (round == 5) {
        document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);
        setTimeout(() => {
            result(userScore, compScore);
        }, 100); // 100ms delay lets the browser update the UI
    }
}

function result(userScore, compScore) {
    if (userScore > compScore) {
        alert("YOU WON!!!")
    }
    else {
       alert("COMPUTER WON!!!")
    }
}

const btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice=btn.value;
        playround(userChoice);
    })
});

