const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Not valid input!");
  }
};

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  //shortened version:
  let winner;

  userChoice === computerChoice ? (winner = "It was a tie!") : winner;

  userChoice === "bomb" ? (winner = "You won!!!") : winner;

  if (userChoice === "rock" && !winner) {
    computerChoice === "paper"
      ? (winner = "Computer won.")
      : (winner = "You won!!!");
  }

  if (userChoice === "paper" && !winner) {
    computerChoice === "scissors"
      ? (winner = "Computer won.")
      : (winner = "You won!!!");
  }

  if (userChoice === "scissors" && !winner) {
    computerChoice === "rock"
      ? (winner = "Computer won.")
      : (winner = "You won!!!");
  }

  return winner;
  
/*
if(userChoice === computerChoice) {
  return 'It was a tie!';
}

if(userChoice === 'bomb') {
  return 'You won!!!'; 
}

if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
    return 'Computer won.';
  } else {
    return 'You won!!!';
  }
} 

if(userChoice === 'paper') {
  if(computerChoice === 'scissors') {
    return 'Computer won.';
  } else {
    return 'You won!!!';
  }
}

if(userChoice === 'scissors') {
  if(computerChoice === 'rock') {
    return 'Computer won.';
  } else {
    return 'You won!!!';
  }
}
*/
};

function playGame(userInput) {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();

  if (!userChoice) {
    return userChoice;
  }
  console.log(`You:      ${userChoice}`);
  console.log(`Computer: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame("bomb");
