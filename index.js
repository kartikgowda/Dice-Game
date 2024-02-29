let randomNumber1 = Math.ceil(Math.random() * 6);

let dicePlayerOne = document.querySelector('.img1');

dicePlayerOne.setAttribute('src', `/images/dice${randomNumber1}.png`);
