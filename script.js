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
    // show the current round (1-based)
    document.querySelector("#round").innerHTML = round + 1;
    const compChoice = getComputerChoice();
    document.querySelector("#compChoice").innerHTML = "Chose: " + compChoice;

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
    
    document.querySelector("#userScore").innerHTML =  userScore;
    document.querySelector("#compScore").innerHTML =  compScore;

    if (round == 5) {
        document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);
        setTimeout(() => {
            result();
        }, 100); // 100ms delay lets the browser update the UI
    }
}

function result() {
    // use the global scores
    if (userScore > compScore) {
        alert("YOU WON!!!");
    }
    else {
       alert("COMPUTER WON!!!");
    }
    //reset
    userScore = 0;
    compScore = 0;
    round = 0;

    // update UI and re-enable buttons
    document.querySelector("#userScore").innerHTML = userScore;
    document.querySelector("#compScore").innerHTML = compScore;
    document.querySelector("#round").innerHTML = round;
    document.querySelectorAll(".btn").forEach(btn => btn.disabled = false);
}

const btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice=btn.value;
        playround(userChoice);
    })
});

