'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number";
//
// document.querySelector('.number').textContent = 99;
// document.querySelector('.score').textContent = 10;
//
// document.querySelector('.guess').value = 99;
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;

document.querySelector('.check').addEventListener('click' ,  function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess , typeof guess);

  if (!guess){
    document.querySelector('.message').textContent = " 🚫 No Number";

  }
  else if (guess === secretNumber){
    document.querySelector('.message').textContent= 'Correct Number 👍🏻';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
 }

  }
  else if (guess > secretNumber){
    if(score>1){
      document.querySelector('.message').textContent = "Too High 📈";
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = "You Lost the game! 😩";
      document.querySelector('.score').textContent = 0;

    }

  }
  else if (guess < secretNumber)if(score>1){
    document.querySelector('.message').textContent = "Too Low 📉";
    score--;
    document.querySelector('.score').textContent = score;
  }
  else{
    document.querySelector('.message').textContent = "You Lost the game! 😩";
    document.querySelector('.score').textContent = 0;

  }

});

document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
});
