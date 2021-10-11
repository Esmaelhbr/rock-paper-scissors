
let selectionOption =["rock", "paper", "scissors"];
let mathRandom =Math.floor(Math.random() * 3);

console.log(selectionOption[1])


function playRound(playerSelection, computerSelection) {

	console.log(computerSelection);
  // your code here!
  if(playerSelection==computerSelection){
  	 console.log("tied");
  }else if(playerSelection == "rock" && computerSelection =="scissors"){
  	console.log("player won... ");
  }else if(playerSelection == "rock" && computerSelection =="paper"){
  	console.log("player lost paper beats rock");
  }else if(playerSelection == "scissors" && computerSelection =="paper"){
  	console.log("player won, scissors beats paper");
  }else if(playerSelection == "scissors" && computerSelection=="rock"){
  	console.log("player lost, rock  beats scissors");
  }
  else if(playerSelection == "paper" && computerSelection =="rock"){
  	console.log("player win, paper  beats rock");
  }else if(playerSelection == "paper" && computerSelection =="scissors"){
  	console.log("player lost, scissors beats paper");
  }
  // console.log(computerSelection)

}


// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

playRound("paper", selectionOption[mathRandom]);

