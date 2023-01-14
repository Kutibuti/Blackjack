let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let age = 19
let hasBlackjack = false
let isAlive = true
let message = ""



function blackJack() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've BJ"
        hasBlackjack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    }
}


function ageCheck() {
    if (age >= 18) {
        console.log("Welcome you can play blackjack")
        blackJack()
    } else {
        console.log("Sorry you can't enter the casino!")
    }
}

function startGame() {
    ageCheck()
    console.log(hasBlackjack)
    console.log(message)
}

