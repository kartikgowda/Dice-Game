let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

let h1 = document.querySelector('h1');

let dicePlayerOne = document.querySelector('.img1');
let dicePlayerTwo = document.querySelector('.img2');

dicePlayerOne.setAttribute('src', `/images/dice${randomNumber1}.png`);

dicePlayerTwo?.setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  h1.textContent = '🏆 Player One Wins!';
} else if (randomNumber2 > randomNumber1) {
  h1.textContent = 'Player Two Wins! 🏆';
} else {
  h1.textContent = "It's a Draw!";
}
