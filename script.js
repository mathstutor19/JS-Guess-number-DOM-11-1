// 'use strict';
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   //   when;there no input
//   if (!guess) {
//     document.querySelector('.message').textContent = ' 🧡 No number';
//   }
//   //   when user win
//   if (secretNumber === guess) {
//     document.querySelector('.message').textContent = ' 🧡 Correct Number';
//     document.body.style.backgroundColor = '#60b247';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;
//   }
//   //   when to high
//   if (secretNumber < guess) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = ' 🧡 Too high';
//     } else {
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.message').textContent = ' 🧡 Game over';
//       document.body.style.backgroundColor = 'red';
//       document.querySelector('.number').style.width = '30rem';
//     }
//   }
//   if (secretNumber > guess) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = ' 🧡 Too low';
//     } else {
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.message').textContent = ' 🧡 Game over';
//       document.body.style.backgroundColor = 'red';
//       document.querySelector('.number').style.width = '30rem';
//     }
//   }
// });

'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when;there no input
  if (!guess) {
    // document.querySelector('.message').textContent = ' 🧡 No number';
    displayMessage(' 🧡 No number');
  }
  //   when user win
  if (secretNumber === guess) {
    displayMessage(' 🧡 Correct number');
    document.body.style.backgroundColor = '#60b247';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;

      displayMessage(guess > secretNumber ? ' 🧡 Too high' : ' 🧡 Too low');
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage(' 🧡 Game over');
      document.body.style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
