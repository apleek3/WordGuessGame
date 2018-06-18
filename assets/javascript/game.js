
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
        starring: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
        letters: ["a", "r", "r", "i", "v", "a", "l"],
        lettercount: [6],
    },

    {//Second object: movie "Aliens"
        name: "Alien",
        date: 1986,
        starring: ["Sigourney Weaver", "Micahel Biehn", "Paul Reiser"],
        letters: ["a", "l", "i", "e", "n"],
        lettercount: [4],
    },

    {//Third object: movie "Airplane"
        name: "Airplane",
        date: 1980,
        starring: ["Robert Hays", "Julie Hagerty"],
        letters: ["a", "i", "r", "p", "l", "a", "n", "e"],
        lettercount: [7],

    },

    {//Third object: movie "Airplane"
        name: "Argo",
        date: 2012,
        starring: ["Ben Affleck", "Bryan Cranston", "Alan Arkin"],
        letters: ["a", "r", "g", "o"],
        lettercount: [3],

    },

    {//Third object: movie "Airplane"
        name: "Avatar",
        date: 2009,
        starring: ["Sam Worthington", "Sigourney Weaver", "Zoe Saldana"],
        letters: ["a", "v", "a", "t", "a", "r"],
        lettercount: [6],

    },


];


let wins = 0;
let lives = 12;
var userText = document.getElementById("guess");
//console.log(userText);



/*********************************
 * 
 * FUNCTIONS
 * 
 ********************************/

//function I created in case I need to remove any divs that are appended
function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

document.getElementById("body").onload = function (event) {
    console.log("Onload functioning");
    console.log(moviesList[0].letters)
    //document.getElementById("winsCounter").style.block = wins;

}

//Begins displaying the global counters
document.getElementById("guessesLeft").innerHTML = (lives);
document.getElementById("winsCounter").innerHTML = (wins);


//**************Alphabet checker "if" method****************

document.onkeypress = function (event) {

        //local variable and function to kickstart the letter checker
        var test = ["a","r","r","i","v","a","l"];
        var alphabet = event.key;
        console.log(alphabet);


        function checkLetters (letter) {
            
            return letter === alphabet.toLowerCase();
        }
           
       // }
        //for (i = 0; i < moviesList[4].letters.length; i++) {}
       //  {
       // if (test.some(checkLetters)= true ) {
        
           //var arrayElement = (test[i]);
           //if (arrayElement === alphabet.toLowerCase()) {
            if (test.some(checkLetters) == true) {
                
                //console.log(test[i]);
                console.log("GOOD LETTER");


            } 

            
            
            else {
                
                console.log("BAD LETTER");
            }
        }
          //  if (condition) {
             //   block of code to be executed if the condition is true
           // } else { 
           //     block of code to be executed if the condition is false
           // }
    


    

     
   /* for(var i in myArray) {
        var arrayElement = myArray[i];
        if (arrayElement == formInput) {
             //Do your stuff
        }
    } */






/*
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
*/




//**************Avatar Keystroke Checker********
document.getElementById("firstButton").onclick = function (event) {

    

    console.log("firstButton test");
    document.onkeypress = function (event) {

        document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);;


        //sets the conditions for running this code as long as number of lives is greater than 0)
        if ((lives > 0) && (moviesList[4].lettercount > 0)) {
            var avatarLetters = event.key;
            userText.textContent = avatarLetters;


            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);;

            //checs the letters against the users input and displays them in the proper boxes
            switch (avatarLetters.toLowerCase()) {
                case "a":
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount -= 3);
                    document.getElementById("hint").innerHTML = "NICE ONE!";


                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "60px";


                    document.getElementById("thirdLetter").innerHTML = "A";
                    document.getElementById("thirdLetter").style.fontSize = "60px";


                    document.getElementById("fifthLetter").innerHTML = "A";
                    document.getElementById("fifthLetter").style.fontSize = "60px";


                    console.log("LETTER MATCH");


                    break;

                case "v":
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount--);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";

                    document.getElementById("secondLetter").innerHTML = "V";
                    document.getElementById("secondLetter").style.fontSize = "60px";


                    console.log("LETTER MATCH");


                    break;

                case "t":
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount -= 1);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";


                    document.getElementById("fourthLetter").innerHTML = "T";
                    document.getElementById("fourthLetter").style.fontSize = "60px";


                    console.log("LETTER MATCH");

                    break;

                case "r":
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount--);
                    document.getElementById("hint").innerHTML = "NAILED IT!";

                    document.getElementById("sixthLetter").innerHTML = "R";
                    document.getElementById("sixthLetter").style.fontSize = "60px";


                    console.log("LETTER MATCH");

                    break;

                default:
                    document.getElementById("guessesLeft").innerHTML = (lives--);
                    document.getElementById("hint").innerHTML = "NOPE! TRY AGAIN";


                    console.log("NOPE");

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);


        }

        else if (lives <= 0) {

            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if (moviesList[4].lettercount <= 0) {

            document.getElementById("hint").innerHTML = ("You Win!");
            document.getElementById("winsCounter").innerhtml = wins++;
            event.stopPropagation();


        }

        else {

            event.stopPropagation();

        }


    }

}

/********************************TO DO LIST **************************************** */

//**************RESET BUTTON********************
/*
document.getElementById("resetButton").onclick = function (event) {
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("winsCounter").innerHTML = (wins);
    document.getElementById("letterCountdown").innerHTML = 0;
    document.getElementById("firstLetter").innerHTML = " ";
    document.getElementById("secondLetter").innerHTML = " ";
    document.getElementById("thirdLetter").innerHTML = " ";
    document.getElementById("fourthLetter").innerHTML = " ";
    document.getElementById("fifthLetter").innerHTML = " ";
    document.getElementById("sixthLetter").innerHTML = " ";
    document.getElementById("seventhLetter").innerHTML = " ";
    document.getElementById("eighthLetter").innerHTML = " ";
    document.getElementById("ninthLetter").innerHTML = " ";
    document.getElementById("tenthLetter").innerHTML = " ";
    document.getElementById("eleventhLetter").innerHTML = " ";
    document.getElementById("twelfthLetter").innerHTML = " ";
    document.getElementById("answer").innerHTML = "Answer:";
    document.getElementById("hint").innerHTML = "Click one the buttons above to Play!"
    console.log("Reset Button working");

}
*/

// Code to compare every letter in the arrays of letters for the correct entry
// also
// Connect the user to the presentation by being able to type letters:


// Code to make the letters or "guesses" appear in  row


//Code to make letters appear when compared with the "answer"



//Code to count the number of guesses left


//Code to restart the game if player wins or loses

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


