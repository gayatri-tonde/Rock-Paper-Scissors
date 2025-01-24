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
let userScore = 0;
let compScore = 0;

function playRound(compChoice, userChoice) {
    let compChoice = getCompChoice();
    let userChoice = getUserChoice();
    let result = "You Win.... " + userChoice + " beats " + compChoice + " !!";
    if (compChoice == userChoice) {
        return "tie";
    }
    if ((compChoice = "rock") && (userChoice = "paper")) {
        userScore++;
        return result;
    }
    else if ((compChoice = "paper") && (userChoice = "scissor")) {
        userScore++;
        return result;
    }
    else if ((compChoice = "scissor") && (userChoice = "rock")) {
        userScore++;
        return result;
    }
    else {
        compScore++;
        return "YOU LOST... " + compChoice + " beats " + userChoice + " !!";
    }    
}

function playGame(){
    let rounds=5;
    for(i=0;i<=rounds;i++)
    {
        playGame();
        print("player score"+"    " + "computer score");
        print(userScore +"    "+ compScore);
        if(userScore==compScore)
        {
            return "TIE..!";
        }
        else if (userScore<compScore)
        {
            return "YOU LOST...!"
        }
        else 
        {
            return "YOU WON...!"
        }
    }
}



