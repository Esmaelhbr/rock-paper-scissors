alert("get smashed by the rock, get cut, you can beat a weak paper");
let selectionOption =["rock", "paper", "scissors"];
let mathRandom =Math.floor(Math.random() * 3);
let playerScore =0;
let computerScore= 0;
let roundPlayed=0;

function reqUserInput(){
	return prompt("rock, paper ,scissors").toLowerCase();
}

function score(){
  console.log("your score: " + playerScore);
  console.log("computer score: " + computerScore);
}
function finalResultCheck(){
    if(roundPlayed == 5){
  	if(playerScore > computerScore){
  		console.log("Player won the game");
  		score();
  	}else if( playerScore < computerScore){
  		console.log("Try again, you lost");
  		score();
  	}else{
  		console.log("Wasn't so easy, try again");
  		score();
  	}}

}

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
  console.log("Number of round: " + roundPlayed)
  // console.log(computerSelection)

  }

function play(){
	playRound(reqUserInput(), selectionOption[mathRandom]);
	playRound(reqUserInput(), selectionOption[mathRandom]);
	playRound(reqUserInput(), selectionOption[mathRandom]);
	playRound(reqUserInput(), selectionOption[mathRandom]);
	playRound(reqUserInput(), selectionOption[mathRandom]);
}





// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


play();
finalResultCheck();



