'use strict';

// //DOM Manipulation: Elements
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 21;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let seceretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

// Handeling Clicked Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (score !== 0) {
    //No input
    if (!guess) {
      displayMessage('❌ No Number!');
      //document.querySelector('.message').textContent = '❌ No Number!';
      //Player wins
    } else if (guess == seceretNumber) {
      displayMessage('🎉 Correct Number!');
      displayNumber(seceretNumber);
      //Change CSS style *background colour
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      //Too High or low
    } else if (guess != seceretNumber) {
      //   if (guess > seceretNumber) {
      //     document.querySelector('.message').textContent = '👇 Too High';
      //   } else {
      //     document.querySelector('.message').textContent = '👆 Too Low';
      //   }
      displayMessage(guess > seceretNumber ? '👇 Too High' : '👆 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

  if (score == 0) {
    displayMessage('❌ You lost the game');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  seceretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  displayMessage('Start gessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/ //
