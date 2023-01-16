let firstCard = 10
let secondCard = 4

let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
//let sumEl= document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")


function renderGame() {
    cardsEl.textContent = "Cards:"

    for(let i=0; i<cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        messageEl.textContent = message
    } else if (sum === 21) {
        message = "You've got BJ"
        messageEl.textContent = message
        hasBlackjack = true
    } else {
        message = "You're out of the game."
        messageEl.textContent = message
        isAlive = false
    }
}


function startGame() {
    renderGame()
    console.log(hasBlackjack)
    console.log(message)
}


function newCard() {
    let newcard = 7
    cards.push(newcard)
    sum += newcard
    renderGame()
}

