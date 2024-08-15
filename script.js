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
        console.log("You win!");
        humanScore++;
    }
    else{
        console.log("You lose!");
        computerScore++;
    }
}
let playGame= () =>{
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
playGame();