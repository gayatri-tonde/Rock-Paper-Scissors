function getCompChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 1) {
        return "rock";
    }
    else if (compChoice == 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getUserChoice() {
    let userChoice = prompt("Enter rock, paper or scissor");
    return userChoice;
}

const compChoice = getCompChoice();
const userChoice = getUserChoice();

function playRound(compChoice, userChoice) {
    if (compChoice == userChoice) {
        return "tie";
    }

    else if (compChoice = "rock" && userChoice = "paper") {

    }

    else if (compChoice = "paper") {

    }

    else if (compChoice = "scissor") { 

    }

    else {
        return "YOU LOST...!";
    }
}

