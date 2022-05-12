const Suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
const Values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const Ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",];
var player1 = [];
var player2 = [];

//Creates the card class to house the suits, values and ranks
class Card {
  constructor(value, rank, suit) {
    this.value = value;
    this.rank = rank;
    this.suit = suit;
  }
}

//The deck class holds all functions that pertain to the deck
//The deck is just an array that holds each card from the card class
//The deck can build itself from the card class, shuffle itself, and deal a card
class Deck {
  constructor(){
    this.deck = [];
  }
  
  //Gathers how many cards exist in the deck array
  //This should always be 52
  get numberOfCards(){
    return this.deck.length;
  }
  
  //The shuffle function grabs the array and randomizes the position
  //The deck then comes back in a randomized order of the 52 cards
  shuffle() {
    for (let i = this.numberOfCards -1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.deck[newIndex];
      this.deck[newIndex] = this.deck[i];
      this.deck[i] = oldValue;
    }
  }
  
  //The build deck function loops through each of the ranks 
  //This loop creates cards for each of the suits which ends when it creates all 52
  buildDeck(){
    for (let suit in Suits) {
      for (let i = 0; i < Ranks.length; i++) {
        this.deck.push(new Card(Values[i], Ranks[i], Suits[suit]));
      }
    }
  }

  //The deal card function returns the last element of the array with the .pop
  //This also removes that element from the array
  dealCard(){
    return this.deck.pop();
  }
}

//Begins the game
function startGame (){
  //Sets the score for each player to 0
  let player1Score = 0;
  let player2Score = 0;

  //Sets up the game with a new deck and shuffles the deck
  //with the functions created in the deck class
  freshDeck = new Deck();
  freshDeck.buildDeck();
  freshDeck.shuffle();

  //The loop pushes a card to each player 
  //The loop ends after 26 loops so the deck is split evenly
  for (let i = 0; i < 26; i++) {
    this.player1[i] = freshDeck.dealCard();
    this.player2[i] = freshDeck.dealCard();
  }
  
  //This loop contains the logic for the game
  //The game takes 26 turns till it ends
  //The else statments determine who wins the round based on the value of the card
  //Whoever wins the round their score is added to the score variables
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

  //This displays each players final scores
  console.log("Player 1's Score is " + player1Score);
  console.log("Player 2's Score is " + player2Score);

  //Determines who the winner of the game is based on their score
  if (player1Score > player2Score){
    console.log("Player 1 wins with " + player1Score);
  } else if (player2Score > player1Score) {
    console.log("Player 2 wins with " + player2Score);
  } else {
    console.log("Game is a draw");
  }
}

//Invokes the startGame function and begins the round
startGame();