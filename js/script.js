const startBtn = document.querySelector("#start-game");
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardEl = document.querySelector("#card-el");
const newBtn = document.querySelector("#new-card");

let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new Card?";
  } else if (sum === 21) {
    message = "You've got blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  let card = 7;
  sum += card;
  cards.push(card);
  renderGame();
}

startBtn.addEventListener("click", startGame);
newBtn.addEventListener("click", newCard);
