
let selectionOption =["rock", "paper", "scissors"];
let mathRandom =Math.floor(Math.random() * 3);
let playerScore =0;
let computerScore= 0;
let roundPlayed=0;


function playRound(playerSelection, computerSelection) {

	console.log(computerSelection);
  // your code here!
  if(playerSelection==computerSelection){
  	 console.log("tied");

  }else if(playerSelection == "rock" && computerSelection =="scissors"){
  	console.log("player won... ");
  	playerScore += 1;
  }else if(playerSelection == "rock" && computerSelection =="paper"){
  	console.log("player lost paper beats rock");
  	computerScore += 1;
  }else if(playerSelection == "scissors" && computerSelection =="paper"){
  	console.log("player won, scissors beats paper");
  	playerScore += 1;
  }else if(playerSelection == "scissors" && computerSelection=="rock"){
  	console.log("player lost, rock  beats scissors");
  	computerScore += 1;
  }
  else if(playerSelection == "paper" && computerSelection =="rock"){
  	console.log("player win, paper  beats rock");
  	playerScore += 1;
  }else if(playerSelection == "paper" && computerSelection =="scissors"){
  	console.log("player lost, scissors beats paper");
  	computerScore += 1;
  }
  roundPlayed++;
  console.log(roundPlayed)
  // console.log(computerSelection)

  }





// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

playRound("paper", selectionOption[mathRandom]);
playRound("paper", selectionOption[mathRandom]);
playRound("paper", selectionOption[mathRandom]);
playRound("paper", selectionOption[mathRandom]);
playRound("paper", selectionOption[mathRandom]);

  if(roundPlayed == 5){
  	if(playerScore > computerScore){
  		console.log("Player won the game");
  	}else if( playerScore < computerScore){
  		console.log("computer won the game")
  	}else{
  		console.log("game tied")
  	}}
