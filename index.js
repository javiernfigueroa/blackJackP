let player = {
    name: "Javier",
    chips: 145
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const HEADER_TEXT = document.getElementById("message-el");
const SUM_ELE = document.querySelector("#sum-el");
const CARDS_ELE = document.querySelector("#cards-el");
const START_BTN = document.querySelector(".start-btn");
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  START_BTN.innerText = "PARTIDA EN CURSO";
  cards = [];
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard);
  cards.push(secondCard);
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  CARDS_ELE.innerText = "Tus cartas: ";
  for (let i = 0; i < cards.length; i++) {
    CARDS_ELE.innerText += " " + cards[i] + " | ";
  }

  SUM_ELE.innerText = "Sum: " + sum;
  if (sum <= 20) {
    message = "Quieres pedir una nueva carta? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! Hiciste un Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "Perdiste, mejor suerte la proxima! 😭";
    isAlive = false;
    START_BTN.innerText = "JUGAR DENUEVO";
  }

  HEADER_TEXT.innerText = message;
}

function newCard() {
  if ((isAlive === true && hasBlackJack === false)) {
    let nextCard = getRandomCard(); //
    sum += nextCard; //
    cards.push(nextCard);
    renderGame();
  }
}
