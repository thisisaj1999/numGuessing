'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// DRY method used for message display
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is No Input
  if (!guess) {
    displayMessage(`⛔ Invalid Input!`);
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    //css selector
    document.querySelector('body').style.backgroundColor = '#7CB518';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`❌ You lost the game!`);
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#800E13';
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  displayMessage(`Start guessing...`);

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#0a0f0d';

  document.querySelector('.number').style.width = '15rem';
});
