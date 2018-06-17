
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
    lettercount: [7],
    },

    {//Second object: movie "Aliens"
    name: "Alien",
    date: 1986,
    starring: ["Sigourney Weaver" , "Micahel Biehn", "Paul Reiser"],
    letters: ["a","l","i","e","n"],
    lettercount: [5],
    },

    {//Third object: movie "Airplane"
    name:"Airplane",
    date: 1980,
    starring: ["Robert Hays", "Julie Hagerty"],
    letters: ["a","i","r","p","l","a","n","e"],
    lettercount:[8],

    },

    {//Third object: movie "Airplane"
     name:"Argo",
     date: 2012,
     starring: ["Ben Affleck","Bryan Cranston","Alan Arkin"],
     letters: ["a","r","g","o"],
     lettercount:[4],
 
    },

    {//Third object: movie "Airplane"
     name:"Avatar",
     date: 2009,
     starring: ["Sam Worthington","Sigourney Weaver","Zoe Saldana"],
     letters: ["a","v","a","t","a","r"],
     lettercount: [6],
 
    },


];

let wins = 0;
let lives = 12;


var userText = document.getElementById("guess");
console.log(userText);





// Code to compare every letter in the arrays of letters for the correct entry
// also
// Connect the user to the presentation by being able to type letters:


// Code to make the letters or "guesses" appear in  row


//Code to make letters appear when compared with the "answer"



//Code to count the number of guesses left


//Code to restart the game if player wins or loses

/*********************************
 * 
 * FUNCTIONS
 * 
 ********************************/
function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

document.onload = function (event) {
    console.log("test");
    //document.getElementById("winsCounter").style.block = wins;
    
}



//**************Alphabet checker****************
document.onkeypress = function (event) {
    
    var alphabet = event.key;
    userText.textContent = alphabet;

        for (i = 0; i < moviesList[0].letters.length; i++) {
            if ((alphabet === (moviesList[4].letters[i])))  {
                console.log("LETTER MATCH");
                document.getElementById("letterCountdown").innerHTML = moviesList[4].lettercount;
                moviesList[4].lettercount--;
                

            } 
            
            else if ((alphabet !== (moviesList[4].letters[i]))) {
                console.log("NOPE");
                document.getElementById("guessesLeft").innerHTML = lives;
                lives--;
                
            
            }

            else {
                alert("Not sure what you typed. Try again!");
            }
            

        }

}

//**************Avatar Keystroke Checker********
document.onkeyup = function (event) {

    var avatarLetters = event.key;
    userText.textContent = avatarLetters;

    switch (avatarLetters) {
        case "a":
            document.getElementById("firstLetter").innerHTML = "A";
            document.getElementById("firstLetter").style.fontSize = "60px";


            document.getElementById("thirdLetter").innerHTML = "A";
            document.getElementById("thirdLetter").style.fontSize = "60px";


            document.getElementById("fifthLetter").innerHTML = "A";
            document.getElementById("fifthLetter").style.fontSize = "60px";
            document.getElementById("hint").innerHTML = "NICE ONE!";
            /*var div = document.createElement("div");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = "red";
            div.style.color = "white";
            div.innerHTML = "Hello";
            document.getElementById("").appendChild(div);*/
            break;

        case "v":
            document.getElementById("secondLetter").innerHTML = "V";
            document.getElementById("secondLetter").style.fontSize = "60px";
            document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";
            break;

        case "t":
            document.getElementById("fourthLetter").innerHTML = "T";
            document.getElementById("fourthLetter").style.fontSize = "60px";
            document.getElementById("hint").innerHTML = "GOOD JOB!";
            break;

        case "r":
            document.getElementById("sixthLetter").innerHTML = "R";
            document.getElementById("sixthLetter").style.fontSize = "60px";
            document.getElementById("hint").innerHTML = "NAILED IT!";
            break;

        default:
            document.getElementById("hint").innerHTML = "NOPE! TRY AGAIN";
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