let humanScore=0,computerScore = 0;
let getHumanChoice=()=>{
   let humanchoice = prompt("whats your choice?");
   humanchoice=humanchoice.toLowerCase();
   switch(humanchoice) {
    case "rock":
      humanchoice=0;
      break;
    case "paper":
      humanchoice=1;
      break;
    case "scissors":
      humanchoice=2;
      break;
  }
   return humanchoice;
}
let getRandomInt =max=> Math.floor(Math.random() * max);
let getComputerChoice=()=> getRandomInt(3);

let playRound=(humanSelection,computerSelection)=>{
    if(humanSelection==computerSelection)
        console.log("tie");
    else if(humanSelection==0 && computerSelection==1){
        console.log("Computer throws Paper;")
        console.log("Computer wins!");
        computerScore++;
    }
    else if(humanSelection==0 && computerSelection==2){
        console.log("Computer throws Scissors");
        console.log("Player wins!");
        humanScore++;
    }
    else if(humanSelection==1 && computerSelection==0){
        console.log("Computer throws Rock");
        console.log("Player wins!");
        humanScore++;
    }
    else if(humanSelection==1 && computerSelection==2){
        console.log("Computer throws Scissors");
        console.log("Computer wins!");
        computerScore++;
    }
    else if(humanSelection==2 && computerSelection==0){
        console.log("Computer throws Rock");
        console.log("Computer wins!");
        computerScore++;
    }
    else if(humanSelection==2 && computerSelection==1){
        console.log("Computer throws Paper");
        console.log("Player wins!");
        humanScore++;
    }      
}
let playgame=()=>{
    let humanSelection=getHumanChoice();
    let computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);
}
playgame();