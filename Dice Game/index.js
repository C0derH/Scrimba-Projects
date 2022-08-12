let player1Score = 0
let player2Score = 0
let player1Turn = true
let player1Rolls = 10
let player2Rolls = 10

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1RollsEl = document.getElementById("player1Rolls")
const player2RollsEl = document.getElementById("player2Rolls")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const doubleBtn = document.getElementById("doubleBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    doubleBtn.style.display = "none"
    resetBtn.style.display = "block"
}


 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    

    if (player1Turn && player1Rolls != 0){
        player1Rolls--;
        player1RollsEl.textContent = player1Rolls
        
    } else if (player2Rolls != 0) {
        player2Rolls--;
        player2RollsEl.textContent = player2Rolls
    }
    if (player1Rolls === 0){
        player1Turn = false
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else if (player2Rolls === 0) {
        player1Turn = true
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    } else {
        player1Turn = !player1Turn
    }

    if (player1Score > player2Score && player1Rolls === 0 && player2Rolls === 0 ) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score > player1Score && player1Rolls === 0 && player2Rolls === 0) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Rolls = 10
    player2Rolls = 10
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    doubleBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

doubleBtn.addEventListener('click',function(){
    console.log("button")
    const randomNumber = Math.floor(Math.random() * 6) + 1
    if(player1Turn){
        if(randomNumber > 3){
            player1Score = player1Score * 2;
        } else {
            player1Score = 0;
        }
        player1Scoreboard.textContent = player1Score;
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        if(randomNumber > 3){
            player2Score = player2Score * 2;
        } else {
            player2Score = 0;
        }
        player2Scoreboard.textContent = player2Score;
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    if (player1Rolls === 0){
        player1Turn = false
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else if (player2Rolls === 0) {
        player1Turn = true
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    } else {
        player1Turn = !player1Turn
    }
    if (player1Score > player2Score && player1Rolls === 0 && player2Rolls === 0 ) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score > player1Score && player1Rolls === 0 && player2Rolls === 0) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }

})