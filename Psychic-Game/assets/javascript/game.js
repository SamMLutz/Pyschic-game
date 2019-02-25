
// define varibles needed for game
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessedLetters = [];
var remainingGuess = 9;

 // variables for amending text on in the DOM
var guessText = document.getElementById("guess-text")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
var remainingText = document.getElementById("remaining-text")
var letGuessedText = document.getElementById("letguessed-text")
const reset = function() {
    remainingGuess = 9;
    guessedLetters = [];
 }

 // function for game functionality
 document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerGuess = alpha[Math.floor(Math.random() * alpha.length)];

    if (userGuess === event.key) {
        if (userGuess === computerGuess) {
            wins++;
            reset();
            alert("YOU WIN!!");
        }
        else if (userGuess !== computerGuess) {
            remainingGuess -=1;
            guessedLetters.push(event.key);
        }
        if (remainingGuess === 0) {
            losses++;
            reset();
            alert("YOU LOSE :(")
        }
      // amending text based on results
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainingText.textContent = "Guesses left: " + remainingGuess;
    letGuessedText.textContent = "Letters guessed: " + guessedLetters;
   }

 };
 
 
 
