$(document).ready(function () {


  var wins = 0
  var losses = 0
  var counter = 0

  // Connect IDs to HTML
  var computerChoiceText = $('#computerGuess')
  var userGuessTotal = $('#userGuessTotal')
  var displayWins = $('#displayWins')
  var displayLosses = $('#displayLosses')

  var computerGuess = (19 + Math.floor(Math.random() * 101))
  var targetNumber = computerGuess

  // Write Computer and User Guess to DOM - before any key is pressed
  $("#computerGuess").text(computerGuess)
  $("#userGuessTotal").text('')

  // initialize random value for each element - with attribute data-crystalValue.
  // TO DO : update after game win or lose-
  $('#earth').attr("data-crystalValue", (1 + Math.floor(Math.random() * 11)))
  $('#air').attr("data-crystalValue", (1 + Math.floor(Math.random() * 11)))
  $('#fire').attr("data-crystalValue", (1 + Math.floor(Math.random() * 11)))
  $('#water').attr("data-crystalValue", (1 + Math.floor(Math.random() * 11)))

  //_________________


  // START GAME LOGIC
  // ________________

  // On Click - (forgot to the $ here at first... was wondering why it wouldnt click)
  $(".crystal-image").on("click", function () {
    // assign the click and its associated data-crystalValue from to the HTML element-?varaiable
    var crystalValue = ($(this).attr("data-crystalValue"))
    crystalValue = parseInt(crystalValue)
    counter += crystalValue

    // write text to userGuessTotal to show the user their current number total (counter)
    $("#userGuessTotal").text(counter)


    if (counter === targetNumber) {
      alert("You win!");
      wins++
      reset()


    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++
      reset()

    }

  });


  function reset() {
    computerGuess = (19 + Math.floor(Math.random() * 101))
    targetNumber = computerGuess
    counter = 0
    displayLosses.text(losses)
    displayWins.text(wins)
    // Write Computer and User Guess to DOM - onreset
    $("#computerGuess").text(computerGuess)
    $("#userGuessTotal").text('')
    $('#earth').attr("data-crystalValue", (1 + Math.floor(Math.random() * 11)))
    $('#air').attr("data-crystalValue", (1 + Math.floor(Math.random() * 11)))
    $('#fire').attr("data-crystalValue", (1 + Math.floor(Math.random() * 11)))
    $('#water').attr("data-crystalValue", (1 + Math.floor(Math.random() * 11)))

  }


});
// END ___________
