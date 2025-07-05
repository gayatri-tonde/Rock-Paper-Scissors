const choices = ["rock", "paper", "scissor"];
let compScore = 0; 
let userScore = 0;
let round = 0;

function getComputerChoice(){
    let compChoice = choices[Math.floor(Math.random() * 3)];
    console.log("computer choice: ", compChoice);
    return compChoice;
} 

function playround(userChoice) {
    const compChoice = getComputerChoice();
    document.querySelector("#compChoice").innerHTML = "Choice: " + compChoice;
    if (userChoice == compChoice) {
        
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
        result(userScore, compScore);
    }
}

function result(userScore, compScore) {
    const result = document.querySelector("#result")
    if (userScore > compScore) {
        result.innerHTML="YOU WON!!!"
    }
    else {
       result.innerHTML="COMPUTER WON!!!"
    }
}

const btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice=btn.value;
        playround(userChoice);
    })
});

