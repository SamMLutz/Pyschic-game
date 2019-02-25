var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessedLetters = [];
var remainingGuess = 9;
// var guesses = 9;
// const reset = function() {
//     remainingGuess = 9;
//     guessedLetters = [];
//  };
 



 var guessText = document.getElementById("guess-text")
 var winsText = document.getElementById("wins-text")
 var lossesText = document.getElementById("losses-text")
 var remainingText = document.getElementById("remaining-text")
 var letGuessedText = document.getElementById("letguessed-text")
 

 document.onkeyup = function(event) {

    var userGuess = event.key;

   

    var computerGuess = alpha[Math.floor(Math.random() * alpha.length)];

    if (userGuess === event.key) {
        if (userGuess === computerGuess) {
            wins++;
            remainingGuess = 9;
            guessedLetters = [];
            // reset();
            alert("YOU WIN!!");
        }
        else if (userGuess !== computerGuess) {
            // losses++;
            remainingGuess -=1;
            guessedLetters.push(event.key);
        }
        if (remainingGuess === 0) {
            losses++;
            remainingGuess = 9;
            guessedLetters = [];
            
          
            // reset();
            alert("YOU LOSE :(")
        }
    
        

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainingText.textContent = "Guesses left: " + remainingGuess;
    letGuessedText.textContent = "Letters guessed: " + guessedLetters;
   }

 };

 