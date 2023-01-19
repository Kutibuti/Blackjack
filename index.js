/*let player = {
    name: "Omer",
    chips: 150
}
*/

let cards = []
let dealerCard = []
let yourSum = 0
let dealerSum = 0
let hasBlackJack = false
let isAlive = true
let drawAgain = true
let message = ""
const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const dealerEl = document.querySelector("#dealer-el")
const playerEl = document.getElementById("player-el")
const stayEl = document.getElementById("btn-stay")
const newCardEl = document.getElementById("btn-addcard")
const startEl = document.getElementById("btn-start")

stayEl.addEventListener("click", function () {
    calculate()
})

newCardEl.addEventListener("click", function () {
    if (isAlive === true && hasBlackJack === false) {
        let newcard = getRandomCard()
        cards.push(newcard)
        yourSum += newcard
        renderGame()
    }
})

startEl.addEventListener("click", function () {
    if (isAlive === true) {
        for (let i = 0; i < 2; i++) {
            cards[i] = getRandomCard()
        }
        dealerCard[0] = getRandomCard()
        yourSum += cards[0] + cards[1]
        dealerSum += dealerCard[0]
        renderGame()
    }
})


//playerEl.textContent = player.name + ": $" + player.chips

function renderGame() {
    cardsEl.textContent = "Your Hand:"
    dealerEl.textContent = "Dealer's Hand: " + dealerCard[0]

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }
    if (yourSum <= 20) {
        message = "Do you want to draw a new card?"
        messageEl.textContent = message
    } else if (yourSum === 21) {
        message = "You've got BJ"
        messageEl.textContent = message
        hasBlackJack = true
    } else {
        message = "You've lost!"
        messageEl.textContent = message
        isAlive = false
    }
}




function getRandomCard() {
    let randomcard = Math.floor(Math.random() * 13) + 1
    if (randomcard > 10) {
        randomcard = 10
    } else if (randomcard === 1) {
        randomcard = 11
    }
    return randomcard
}

function calculate() {
    if (drawAgain === true) {
        for (let i = 1; i<10; i++) {
            dealerCard[i] = getRandomCard()
            dealerEl.textContent += " " + dealerCard[i]
            dealerSum += dealerCard[i]
            if (dealerSum > 16 && dealerSum < 22) {
                break
            }
        }
        drawAgain = false
    }

    if (dealerSum === 21) {
        if (dealerSum === yourSum) {
            message = "Draw!"
            messageEl.textContent = message
        }
        else {
            message = "You've lost!"
            messageEl.textContent = message
        }
    } else if (dealerSum > 16 && dealerSum < 21) {
        if (dealerSum < yourSum && yourSum <= 21) {
            message = "You've win!"
            messageEl.textContent = message
        }
        else {
            message = "You've lost!"
            messageEl.textContent = message
        }
    }
}



















