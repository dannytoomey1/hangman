//Constant
let wordList = ["planet", "poison", "control", "deadly", "central", "diamond", "franchise", "highway", "bathroom", "applaud", "publish", "measure", "profit", "rider", "childish", "public", "decide", "ideal", "eavesdrop", "parking"];


//Variables
let totalGuesses = 6;
let correct = new Array(10);
let wrong = new Array(6);
let word = "";
let hasWon = "";
start();


//event listeners
document.getElementById("submit").addEventListener("click", function() {
    let guess = document.getElementById("guess").value;
    document.getElementById("guess").value = "";
    if(guess.length < 1) {
        document.getElementById("message").innerText = "You must enter a value";
    }
    else if(guess.length > 1) {
        document.getElementById("message").innerText = "Value must only be 1 character";
    }
    else {
        if(word.includes(guess)) {
            correct.push(guess);
            document.getElementById("message").innerText = "Correct";
            hasWon = renderWord();
        }
        else {
            totalGuesses -= 1;
            document.getElementById("left").innerText = "Guesses Left: " + totalGuesses; 
            document.getElementById("message").innerText = "Wrong";
            wrong.push(guess);
            renderMisses();
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
    wrong = new Array(6);
    hasWon = "";
    document.getElementById("left").innerText = "Guesses Left: " + totalGuesses;
    document.getElementById("word").innerText = "Word: ";
    document.getElementById("length").innerText = "Word Length: " + word.length;
    document.getElementById("misses").innerText = "Misses: ";
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

function renderMisses() {
    let misses = wrong[wrong.length - 1];
    for(let i = wrong.length - 2; i > -1; i--) {
        if(wrong[i] != null)
            misses += ", " + wrong[i];
    }
    document.getElementById("misses").innerText = "Misses: " + misses;
}