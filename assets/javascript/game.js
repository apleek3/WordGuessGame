
/*********************************
 * 
 * GLOBAL DECLARATIONS
 * 
 ********************************/
/*
// Code to CREATE the movies as code
let moviesList = [
 
    {//First object: movie "The Goonies"
    name: "Arrival",
    date: 2016,
    starring: ["Amy Adams","Jeremy Renner","Forest Whitaker"],
    letters: ["a","r","r","i","v","a","l"],
    },

    {//Second object: movie "Aliens"
    name: "Alien",
    date: 1986,
    starring: ["Sigourney Weaver" , "Micahel Biehn", "Paul Reiser"],
    letters: ["a","l","i","e","n"],
    },

    {//Third object: movie "Airplane"
    name:"Airplane",
    date: 1980,
    starring: ["Robert Hays", "Julie Hagerty"],
    letters: ["a","i","r","p","l","a","n","e"],

    },

    {//Third object: movie "Airplane"
     name:"Argo",
     date: 2012,
     starring: ["Ben Affleck","Bryan Cranston","Alan Arkin"],
     letters: ["a","r","g","i"],
 
    },

    {//Third object: movie "Airplane"
     name:"Avatar",
     date: 2009,
     starring: ["Sam Worthington","Sigourney Weaver","Zoe Saldana"],
     letters: ["a","v","a","t","a","r"],
 
    },


];
*/
var userText = document.getElementById("guess");
console.log(userText);





// Code to compare every letter in the arrays of letters for the correct entry
// also
// Connect the user to the presentation by being able to type letters:


// Code to make the letters or "guesses" appear in  row


//Code to make letters appear when compared with the "answer"


/************************************** 
//Creating new div to display words?
// var newDiv = document.createElement("div");
// newDiv.textContent = "example";

// targetDiv.appendChild(newDiv);
***************************************/




//Code to count the number of guesses left


//Code to restart the game if player wins or loses

/*********************************
 * 
 * FUNCTIONS
 * 
 ********************************/

//Avatar Keystroke Checker
document.onkeyup = function (event) {

    var avatarLetters = event.key;
    userText.textContent = avatarLetters;

    switch (avatarLetters) {
        case "a":
            console.log("a");
            var div = document.createElement("div");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = "red";
            div.style.color = "white";
            div.innerHTML = "Hello";
            document.getElementById("letterPop").appendChild(div);
            break;
        case "v":
            console.log("v");
            break;
        case "a":
            console.log("a");
            break;
        case "t":
            console.log("t");
            break;
        case "a":
            console.log("a");
            break;
        case "r":
            console.log("r");
            break;
        default:
            console.log("Please guess another letter!")

    }


};




/*****************************************************************************
 * Notes for later - I can use the following code example to create new Divs that display data about my movies above in the columns.
 * **************************************************************************************************************

    // Array holds all of the drinks available
    var drinkList = [
      "Coffee: $5",
      "Espresso: $7",
      "Cappuccino: $6",
      "Latte: $4",
      "Tea: $3",
      "Ice Coffee: $6",
      "Ice Espresso: $8",
      "Ice Latte: $6",
      "Ice Tea: $4"
    ];

    // 1. Create code that "grabs" the div with the matching id (#drink-options);
    // ... 

    var targetDiv = document.getElementById("drink-options");
    targetDiv.textContent = text;
    // ...


    // 2. Create a for loop that creates HTML content of all the drinks using JavaScript.
    // HINT: You will need to use each of the following methods: createElement, textContent, appendChild
    // ...

    var text = "Here are drinks we offer: ";
    var i;
    for (i = 0; i < drinkList.length; i++) {
      text += drinkList[i] + "        ";
    }

    
    var newDiv = document.createElement("div");
    newDiv.textContent = (text);
    targetDiv.appendChild(newDiv);

    **********************************************************/