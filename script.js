let humanScore=0,computerScore=0;
let getHumanChoice =()=>{
    let choice =prompt("Enter your choice: Rock, Paper, Scissors");
    choice=choice.toLowerCase();
    if(choice=="rock" |choice=="paper"|choice=="scissors"){
        return choice;
    }
    else{
        console.log("Enter Correct spelling");
        return getHumanChoice();
    }
}
let getComputerChoice = ()=>{
    let choices=["rock","paper","scissors"];
    let rand =Math.floor(Math.random()*3);
    return choices[rand];
}
let showWin=(userWin)=>{
    if(userWin){
        console.log("player wins round!");
        humanScore++;
    }
    else{
        console.log("Computer wins round!");
        computerScore++;
    }
}
let playRound= () =>{
    let humanSelection = getHumanChoice();
    let computerSelection=getComputerChoice();
    console.log("User selected : ", humanSelection);
    console.log("Computer selected : ", computerSelection);
    if(humanSelection===computerSelection) console.log("Tie")
        else {
        let userWin=null;
        if(humanSelection==="rock")userWin= computerSelection==="scissors"? true:false;
        else if(humanSelection==="paper")userWin=computerSelection==="rock"?true:false;
        else if(humanSelection==="scissors")userWin=computerSelection==="paper"?true:false;
        showWin(userWin);
    }
}
let round=1;
let gameWin=()=>{
    if(humanScore>=2 && humanScore>computerScore){
        console.log('Congratulations Player has won the game');
    }
    else if(computerScore=>2 && computerScore>humanScore){
        console.log('Computer has won the game');
    }
    else if(humanScore===computerScore){
        console.log("Tie");
    }
}
let playgame=()=>{
    console.log("Round",round);
    playRound();
    console.log("User Score : ", humanScore);
    console.log("Computer Score : ", computerScore);
    round++;
    if(round<=5){
        playgame();
    }
    else{
        gameWin();
    }
    
}
window.onload = () => {
    playgame();
}