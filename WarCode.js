const Suits = ["Spades", "Clubs", "Diamonds", "Hearts"]
const Values = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

class Deck{
  constructor(cards = freshDeck()){
    this.cards = cards
  }

  get numberOfCards(){
    return this.cards.length
  }

  pop() {
    return this.cards.shift()
  }

  push(card){
    this.cards.push(card)
  }

  shuffle() {
    for (let i = this.numberOfCards -1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}
  
class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }
}

function freshDeck() {
  return Suits.flatMap(suit => {
    return Values.map(value => {
      return new Card(suit, value)
    })
  })
}

const cardValue = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

let playerDeck
let computerDeck
let inRound
let stop

function startGame(){
  deck = new Deck()
  deck.Shuffle()

  const deckMid = (deck.numberOfCards / 2)
  Deck1 = new Deck(deck.cards.slive(0, deckMid))
  Deck2 = new Deck(deck.cards.slice(deckMid, deck.numberOfCards))

  console.log(Deck1)
  console.log(Deck2)
}