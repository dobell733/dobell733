let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//generates random number between 0 and 9
const generateTarget = (value) => {
  return Math.floor(Math.random() * 10);
}
//determines if user's guess is closer than computer's guess or vice versa
const compareGuesses = (userGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - userGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
  }
 
//updates score depending if user won or computer won
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
//increases round number by one each time played
const advanceRound = () => currentRoundNumber++;

//updateScore('human');
//console.log(humanScore); // To confirm that this value increased by 1
//updateScore('computer');
//console.log(computerScore);
