const randomNumber = ( parseInt(Math.random()*100 + 1))

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGame = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}


function validateGuess(guess){
    //validating value
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess< 1){
        alert("Please enter a number more than 1")
    } else if(guess> 100){
        alert("Please enter a number less than 100")
    } else {
        previousGuess.push(guess) // pushing it inside an array
        if(numGuess === 11){
             displayGuess(guess)
             displayMessage(`Game Over. Random number was ${randomNumber}`)
             endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
// value checking
if (guess ===randomNumber) {
displayGuess(`You guessed it right`)
endGame()
} else if (guess< randomNumber){   
    displayGuess(`Number is too low`) 

} else if (guess> randomNumber){   
    displayGuess(`Number is too high`) 

}}


function displayGuess(guess){
// updating and clearing
userInput.value = ""
guessSlot.innerHTML += `${guess}   `
numGuess++;
remaining.innerHTML = `${11- numGuess}`
}


function displayMessage(message){
    // low or high value
lowOrHigh.innerHTML= `<h2> ${message} </h2>`
}


function endGame(){

}

function newGame(){
    
}




















