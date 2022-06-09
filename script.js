let totalGuesses = 6;
let wordList = ["planet", "poison", "control", "deadly", "central", "diamond", "franchise", "highway", "bathroom", "applaud", "publish", "measure", "profit", "rider", "childish", "public", "decide", "ideal", "eavesdrop", "parking"];
let correct = new Array(10);
let wrong = new Array(10);
let word = "";
let hasWon = "";
start();

function start() {
  let random = Math.floor(Math.random() * 20);
  word = wordList[random];
  totalGuesses= 6;
  correct = new Array(10);
  wrong = new Array(10);
  hasWon = "";
  document.getElementById("left").innerText = "Guesses Left: " + totalGuesses;
  document.getElementById("word").innerText = "Word: ";
  document.getElementById("length").innerText = "Word Length: " + word.length;
}