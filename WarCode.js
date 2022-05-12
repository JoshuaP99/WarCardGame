const Suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
const Values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const Ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",];
var player1 = [];
var player2 = [];

class Card {
  constructor(value, rank, suit) {
    this.value = value;
    this.rank = rank;
    this.suit = suit;
  }
}

class Deck {
  constructor(){
    this.deck = [];
  }
  
  get numberOfCards(){
    return this.deck.length;
  }
  
  shuffle() {
    for (let i = this.numberOfCards -1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.deck[newIndex];
      this.deck[newIndex] = this.deck[i];
      this.deck[i] = oldValue;
    }
  }
  
  buildDeck(){
    for (let suit in Suits) {
      for (let i = 0; i < Ranks.length; i++) {
        this.deck.push(new Card(Values[i], Ranks[i], Suits[suit]));
      }
    }
  }

  dealCard(){
    return this.deck.pop();
  }
}

function startGame (){
  let player1Score = 0;
  let player2Score = 0;

  freshDeck = new Deck();
  freshDeck.buildDeck();
  freshDeck.shuffle();

  for (let i = 0; i < 26; i++) {
    this.player1[i] = freshDeck.dealCard();
    this.player2[i] = freshDeck.dealCard();
  }
  
  for (let i = 0; i < 26; i++) {
    if (this.player1[i].value > this.player2[i].value){
      console.log(this.player1[i].rank + " of " + this.player1[i].suit +" is greater than " + this.player2[i].rank + " of " + this.player2[i].suit);
      player1Score += 1;
    } else if (this.player2[i].value > this.player1[i].value){
      console.log(this.player2[i].rank + " of " + this.player2[i].suit +" is greater than " + this.player1[i].rank + " of " + this.player1[i].suit);
      player2Score += 1;
    } else {
      console.log("Cards are of equal value");
    }
  }

  console.log("Player 1's Score is " + player1Score);
  console.log("Player 2's Score is " + player2Score);

  if (player1Score > player2Score){
    console.log("Player 1 wins with " + player1Score);
  } else if (player2Score > player1Score) {
    console.log("Player 2 wins with " + player2Score);
  } else {
    console.log("Game is a draw");
  }
}

startGame();