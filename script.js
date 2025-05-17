let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1
  if (random > 10) {
    return 10
  } else if (random === 1) {
    return 11
  } else {
    return random
  }
}

function startGame() {
  isAlive = true
  hasBlackJack = false
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards.join(" ")
  sumEl.textContent = "Sum: " + sum

  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }

  messageEl.textContent = message
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
  }
}