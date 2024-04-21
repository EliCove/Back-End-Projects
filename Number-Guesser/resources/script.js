let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const alert = (userGuess) => {
    if (userGuess < 0 || userGuess > 9) {
        window.alert('Your number is out of the range. \nRange is: 0 - 9.');
    }
}

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (numOne, numTwo) => Math.abs(numTwo - numOne);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    alert(userGuess);
    return ((getAbsoluteDistance(targetNumber, userGuess) < getAbsoluteDistance(targetNumber, computerGuess)) || 
    (getAbsoluteDistance(targetNumber, userGuess) === getAbsoluteDistance(targetNumber, computerGuess)));
}

const updateScore = roundWinner => {
    switch (roundWinner) {
        case 'human':
            humanScore++;
            break;
        default:
            computerScore++;
            break;
    }
};

const advanceRound = () => {
  currentRoundNumber++;
};