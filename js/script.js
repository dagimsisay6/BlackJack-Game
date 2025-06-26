const startBtn = document.querySelector("#start-game");
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardEl = document.querySelector("#card-el");
const newBtn = document.querySelector("#new-card");
const playerEl = document.querySelector("#player-el");

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Tim",
  chips: 200,
};

playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
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
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

startBtn.addEventListener("click", startGame);
newBtn.addEventListener("click", newCard);
