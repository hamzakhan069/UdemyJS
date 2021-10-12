'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    document.querySelector('body').style.backgroundColor = '#cead00';
    document.querySelector('.again').style.borderColor = '#cead00';
    document.querySelector('.check').style.borderColor = '#cead00';
    document.querySelector('.number').style.borderColor = '#cead00';
    document.querySelector('.again').style.color = '#cead00';
    document.querySelector('.check').style.color = '#cead00';
    document.querySelector('.number').style.color = '#cead00';

    // When the number is invalid (not between 1-20)
  } else if (guess > 20 || guess < 1) {
    displayMessage('⛔ Invalid Number!');
    document.querySelector('body').style.backgroundColor = '#cead00';
    document.querySelector('.again').style.borderColor = '#cead00';
    document.querySelector('.check').style.borderColor = '#cead00';
    document.querySelector('.number').style.borderColor = '#cead00';
    document.querySelector('.again').style.color = '#cead00';
    document.querySelector('.check').style.color = '#cead00';
    document.querySelector('.number').style.color = '#cead00';

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('👍🏽 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.guess').disabled = true;
    document.querySelector('.number').style.width = '36rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.again').style.borderColor = '#60b347';
    document.querySelector('.check').style.borderColor = '#60b347';
    document.querySelector('.number').style.borderColor = '#60b347';
    document.querySelector('.again').style.color = '#60b347';
    document.querySelector('.check').style.color = '#60b347';
    document.querySelector('.number').style.color = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '☝🏽 Too High!' : '👇🏽 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.again').style.borderColor = '#222';
      document.querySelector('.check').style.borderColor = '#222';
      document.querySelector('.number').style.borderColor = '#222';
      document.querySelector('.again').style.color = '#222';
      document.querySelector('.check').style.color = '#222';
      document.querySelector('.number').style.color = '#222';
    } else {
      displayMessage('👎🏽 You lost the game!');
      document.querySelector('.guess').disabled = true;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#d5362e';
      document.querySelector('.again').style.borderColor = '#d5362e';
      document.querySelector('.check').style.borderColor = '#d5362e';
      document.querySelector('.number').style.borderColor = '#d5362e';
      document.querySelector('.again').style.color = '#d5362e';
      document.querySelector('.check').style.color = '#d5362e';
      document.querySelector('.number').style.color = '#d5362e';
    }
  }
});

// Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  displayMessage('Start guessing...');

  document.querySelector('.number').style.width = '18rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.again').style.borderColor = '#222';
  document.querySelector('.check').style.borderColor = '#222';
  document.querySelector('.number').style.borderColor = '#222';
  document.querySelector('.again').style.color = '#222';
  document.querySelector('.check').style.color = '#222';
  document.querySelector('.number').style.color = '#222';
});
