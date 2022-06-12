//Constant
let wordList = ["planet", "poison", "control", "deadly", "central", "diamond", "franchise", "highway", "bathroom", "applaud", "publish", "measure", "profit", "rider", "childish", "public", "decide", "ideal", "eavesdrop", "parking"];


//Variables
let totalGuesses = 6;
let correct = new Array(10);
let wrong = new Array(10);
let word = "";
let hasWon = "";
start();


//event listeners
document.getElementById("submit").addEventListener("click", function() {
    let guess = document.getElementById("guess").value;
    if(guess.length < 1) {
        document.getElementById("message").innerText = "You must enter a value";
        guess.value = "";
    }
    else if(guess.length > 1) {
        document.getElementById("message").innerText = "Value must only be 1 character";
        guess.value = "";
    }
    else {
        if(word.includes(guess)) {
            correct.push(guess);
            document.getElementById("message").innerText = "Correct";
            guess.value = "";
            hasWon = renderWord();
        }
        else {
            totalGuesses -= 1;
            document.getElementById("left").innerText = "Guesses Left: " + totalGuesses; 
            document.getElementById("message").innerText = "Wrong";
            guess.value = "";
            wrong.push(guess);
        }
    }
    if(hasWon === word) {
        document.getElementById("message").innerText = "You Won";
        start();
    }
    if(totalGuesses === 0) {
        document.getElementById("message").innerText = "You Lost";
        start();
    }
});

document.getElementById("reset").addEventListener("click", function() {
    start();
});

//render functions
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

function renderWord() {
    let render = "";
    for(let i = 0; i < word.length; i++) {
        if(correct.includes(word.charAt(i)))
            render += word.charAt(i);
        else
            render += "_";     
    }
    document.getElementById("word").innerText = "Word: " + render;
    return render;
}