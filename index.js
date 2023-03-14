let firstCard = 3;
let secondCard = 6;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
const HEADER_TEXT = document.getElementById("message-el")
const SUM_ELE = document.querySelector("#sum-el")
const CARDS_ELE = document.querySelector("#cards-el")

function getRandomCard() {
    
}

function startGame() {
    renderGame();
}

function renderGame() {
  CARDS_ELE.innerText = 'Tus cartas: ';
  for(let i = 0; i < cards.length; i++) {
    CARDS_ELE.innerText += ' ' + cards[i] + ' -';
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
  }

  HEADER_TEXT.innerText = message;
}

function newCard() {
    console.log("sacando carta"); 
    
    let nextCard = 2; //

    CARDS_ELE.innerText += ' - ' + nextCard;
     
    sum += nextCard; //
    cards.push(nextCard)

    SUM_ELE.innerText = sum; //

    renderGame();
}


