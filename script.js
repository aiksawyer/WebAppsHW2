var wordArray = ["blackberry", "strawberry", "blueberry", "pineapple", "raspberry"];
var emptyGuess = ["_"];
var lives = 8;
var random = Math.floor(Math.random() * 3);

var word = {};

word.chooseWord = function () {
  var guessWord = [];
  for (i = 0; i < wordArray[random].length; i++) {
    guessWord[i] = wordArray[random].charAt(i);
  }
  return guessWord;
}
word.blankWord = function () {
  var empty = [];
  for (i = 0; i < wordArray[random].length; i++) {
    empty[i] = "_"
  }
  return empty
}

correctWord = word.chooseWord();
emptyArray = word.blankWord();

word.guessLetter = function (letter) {
  if (lives > 0) {
    var correct = 0
    var condition = 0
    for (i = 0; i < correctWord.length; i++) {
      if (letter == correctWord[i]) {
        emptyArray[i] = letter
        condition = 1
      }
    }
    console.log(emptyArray);
    if (condition == 1) {
      console.log("Well done! Keep going")
    } else {
      lives = lives - 1;
      console.log("Nope! You have " + lives + " lives left!")
    }
    for (i = 0; i < correctWord.length; i++) {
      if (emptyArray[i] == correctWord[i]) {
        correct = correct + 1
      }
    }
    if (correct == correctWord.length) {
      console.log("CONGRATULATIONS")
    }
  } else {
    console.log("GAME OVER")
  }
}

word.guessLetter("b");
word.guessLetter("a");
word.guessLetter("z");
word.guessLetter("k");
word.guessLetter("l");
word.guessLetter("r");
word.guessLetter("r");
word.guessLetter("O");