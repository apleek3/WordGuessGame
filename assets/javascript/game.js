
/*********************************
 * 
 * GLOBAL DECLARATIONS
 * 
 ********************************/

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

var userText = document.getElementById("guess");




/*
function arrivalCheck () {
    var arrivalLetters = ["a","r","r","i","v","a","l"];
    var sendToPrinter = arrivalLetters.indexOf(userText);
    if (sendToPrinter >= 0) {
        console.log(sendToPrinter);

    } else {
        console.log(sendToPrinter);
    }

    

    document.getElementById("demo").innerHTML = sendToPrinter;
}
*/



// Code to compare every letter in the arrays of letters for the correct entry
// also
// Connect the user to the presentation by being able to type letters:


// Code to make the letters or "guesses" appear in  row

//function printLetter () {
//   document.getElementById("firstLetter").innerHTML = ages.some(checkAdult);
//}


//Code to make letters appear when compared with the "answer"



//Code to count the number of guesses left


//Code to restart the game if player wins or loses

/*********************************
 * 
 * FUNCTIONS
 * 
 ********************************/
document.onkeyup = function(event) {

    var letter = event.key;
    userText.textContent = letter;

    switch (letter) {
        case "a":
            console.log("a");
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




