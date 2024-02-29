let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

let dicePlayerOne = document.querySelector('.img1');
let dicePlayerTwo = document.querySelector('.img2');

dicePlayerOne.setAttribute('src', `/images/dice${randomNumber1}.png`);

dicePlayerTwo?.setAttribute('src', `images/dice${randomNumber2}.png`);
