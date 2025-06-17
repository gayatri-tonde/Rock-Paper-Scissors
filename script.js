const choices=["rock", "paper", "scissor"];
let compScore=0;
let userScore=0;
function getComputerChoice(){
    let compChoice=choices[Math.floor(Math.random()*3)];
    console.log("computer choice: ",compChoice);
    return compChoice;
}
function getUserChoice(){
    let userChoice=prompt("Enter you choice(rock/paper/scissor): ");
    userChoice=userChoice.toLowerCase();
    console.log("user choice: ",userChoice);
    return userChoice;
}  
function playround(compChoice, userChoice){
    if (userChoice==compChoice){
        console.log("It's tie!");
    }
    else{
        if(compChoice=="rock" && userChoice=="paper" ||
           compChoice=="paper" && userChoice=="scissor" ||
           compChoice=="scissor" && userChoice=="rock"){
            console.log("You win!");
            userScore++;
        }
        if(compChoice=="rock" && userChoice=="scissor" ||
           compChoice=="paper" && userChoice=="rock" ||
            compChoice =="scissor" && userChoice=="paper"){
            console.log("You lose!");
            compScore++;
        }
    }
}
function game(){
    for(let i=0; i<5; i++){
        console.log("Round " + (i+1));
        let userChoice=getUserChoice();
        let compChoice=getComputerChoice();
        
        playround(compChoice, userChoice);
        console.log("Current Score: User: " + userScore + " Computer: " + compScore);
    }
    console.log("Final Score: User: " + userScore + " Computer: " + compScore);
    if(userScore > compScore){
        console.log("Congratulations! You win the game!");
    } else if(userScore < compScore){
        console.log("Sorry! You lose the game!");
    } else {
        console.log("It's a draw!");
    }
}
// Start the game
game();