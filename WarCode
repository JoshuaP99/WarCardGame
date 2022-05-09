var Suits = ["Spades", "Clubs", "Diamonds", "Hearts"]
var Values = ["A", "K", "Q", "J", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var players = new Array();

function createPlayers(num){
	players = new Array();
  for(var i = 1; i <= num; i++) {
  	var hand = new Array();
    var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand }
    players.push(player);
    }
  }

function createDeck(){
	let Deck = Array()
  for (i = 0; i < Suits.length; i++){
  	for(x = 0; x < Values.length; i++){
    	let Card = {Value: Values[x], Suit: Suits[i]}
      Deck.push(Card)
    }
  }
}

function Shuffle(Deck) {
	for (let i = 0; i < 1000; i++) {
  	let location1 = Math.floor((Math.random() * Deck.length));
		let location2 = Math.floor((Math.random() * Deck.length));
		let tmp = Deck[location1]; 
    
    deck[location1] = deck[location2];
		deck[location2] = tmp;
  }
}

var deck1 = createDeck()
Shuffle(deck1)

function dealCard(Deck){
    return Deck.pop();
}

let card = dealCard(deck1);
console.log(card);
