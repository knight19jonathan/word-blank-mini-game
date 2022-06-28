console.log("linked")
var game = document.getElementById('#guess');
var start = document.getElementById('#startbutton');

var words = ['apple', 'banana', 'orange', 'pear', 'strawberry', 'watermelon', 'grape', 'cherry', 'mango', 'kiwi', 'pineapple', 'peach', 'plum', 'blueberry', 'blackberry', 'coconut', 'cranberry', 'fig', 'gooseberry', 'lemon', 'lime', 'lime', 'mulberry', 'nectarine', 'orange', 'papaya', 'peach', 'pear', 'plum', 'raspberry', 'strawberry', 'tangerine', 'tomato', 'watermelon', 'grape', 'cherry', 'mango', 'kiwi', 'pineapple', 'peach', 'plum', 'blueberry', 'blackberry', 'coconut', 'cranberry', 'fig', 'gooseberry', 'lemon', 'lime', 'lime', 'mulberry', 'nectarine', 'orange', 'papaya', 'peach', 'pear', 'plum', 'raspberry', 'strawberry', 'tangerine', 'tomato', 'watermelon', 'carrot', 'cucumber', 'eggplant', 'garlic', 'lettuce', 'onion', 'potato', 'squash', 'tomato', 'zucchini', 'code', 'chair', 'guess', 'function',];
 var word = words[Math.floor(Math.random() * words.length)];
var guess = [];
var chosenGameWord = ""; 
var lives = 10;
var guessed = false;
var emptyLetters = [];
var numBlanks = 0;


start.addEventListener("click", function() {
    playgame();

});

function playgame() {
    replaceLetters();
    

        // assigned values to the 
        // if keyCode = keyCode of letter with an "_" show the letter 
        
    
    
    //startimer(); how to update DOMnode, how to start interval and set interval 
    
}

function replaceLetters() {
    chosenGameWord = words[Math.floor(Math.random() * words.length)]
    emptyLetters = chosenGameWord.split("")
    numBlanks = emptyLetters.length 
        var blankLetters = [];
        for (var i =0; i < numBlanks; i++) {
            blankLetters.push("_")
        }
    
    game.textContent = blankLetters.join(" ")
}

//init();

//
// event listener for key up for filling guess to check guess function check if its right and reveal the letter if correct
// start the game function calls the start time function pick a word and render it the screen

// function to store scores and the losses  that init loads local storage wins and losses pulls and renders to screen 

// end game function displays wins and losses and offer user to play again and updates wins losses and local storage 