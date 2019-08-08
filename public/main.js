const deck = [];

const deckBuild = () => {
  const suits = ["spades", "clubs", "hearts", "diamonds"];
  const values = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king"
  ];

  for (let i = 0; i < suits.length; i++) {
    let suit = suits[i];
    for (let j = 0; j < values.length; j++) {
      let value = values[j];
      deck.push(`${value} ${"of"} ${suit}`);
    }
  }
  console.log(deck);
  shuffleDeck();
};

const shuffleDeck = () => {
  for (let i = 1; i <= deck.length - 1; i++) {
    let rando = Math.floor(Math.random() * i);
    const temp = deck[i];
    deck[i] = deck[rando];
    deck[rando] = temp;
  }
  console.log(deck);
};

const displayCard = () => {
  document.querySelector(".hand-1").textContent = handOne[(0, 1, 2, 3)];
};

let handOne = [];
let handTwo = [];

const dealCards = () => {
  console.log(deck.length);
  if (handOne < 3) {
    for (let i = 0; i < 4; i++) {
      handOne.push(deck[i]);
      deck.pop(deck[i]);
      console.log(handOne);
    }
  } else if (handTwo < 3) {
    for (let i = 0; i < 4; i++) {
      handTwo.push(deck[i]);
      deck.pop(deck[i]);
      console.log(handTwo);
    }
  }
  console.log(deck.length);
  // document.querySelector(".hand").textContent = handOne.value;
};

//////////////////
const shuffleButton = document.querySelector(".shuffle-button");
shuffleButton.addEventListener("click", shuffleDeck);
/////////////
document //select the show-card class and upon click do this function
  .querySelector(".show-card")
  .addEventListener("click", displayCard);
//////////////////////////////////////
const dealButton = document.querySelector(".deal-card-button");
dealButton.addEventListener("click", dealCards);

document.addEventListener("DOMContentLoaded", deckBuild);
// document.addEventListener("DOMContentLoaded", shuffleDeck);
