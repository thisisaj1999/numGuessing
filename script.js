'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is No Input
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ Invalid Input!`;
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // css
    document.querySelector('body').style.backgroundColor = '#7CB518';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `❌ You lost the game!`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#800E13';
    }
  }

  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📉 Too Low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `❌ You lost the game!`;
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

  document.querySelector('.message').textContent = `Start guessing...`;

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#0a0f0d';

  document.querySelector('.number').style.width = '15rem';
});
