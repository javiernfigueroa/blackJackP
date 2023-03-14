let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
const HEADER_TEXT = document.getElementById("message-el")
const SUM_ELE = document.querySelector("#sum-el")
const CARDS_ELE = document.querySelector("#cards-el")

function startGame() {
  SUM_ELE.innerText = "Sum: " + sum;
  CARDS_ELE.innerText = 'Tus cartas: '+firstCard + ' - ' + secondCard
  if (sum <= 20) {
    message = "Quieres pedir una nueva carta? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! Hiciste un Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "Perdiste, mejor suerte la proxima! 😭";
    isAlive = false;
  }

  HEADER_TEXT.innerText = message;
}

function newCard() {
    console.log("sacando carta")
}
