
/*********************************
 * 
 * GLOBAL DECLARATIONS
 * 
 ********************************/

// Code to CREATE the movies as an array of Objects
let moviesList = [

    {//First object: movie "Arrival"
        name: "Arrival",
        date: 2016,
        starring: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
        letters: ["a", "r", "r", "i", "v", "a", "l"],
        lettercount: [6],
    },

    {//Second object: movie "Aliens"
        name: "Aliens",
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

    {//Fourth object: movie "Argo"
        name: "Argo",
        date: 2012,
        starring: ["Ben Affleck", "Bryan Cranston", "Alan Arkin"],
        letters: ["a", "r", "g", "o"],
        lettercount: [3],

    },

    {//Fifth object: movie "Avatar"
        name: "Avatar",
        date: 2009,
        starring: ["Sam Worthington", "Sigourney Weaver", "Zoe Saldana"],
        letters: ["a", "v", "a", "t", "a", "r"],
        lettercount: [6],

    },


];

//Global variables list
let wins = 0;
let lives = 8;
var userText = document.getElementById("guess");

// Storage Arrays for each word
var avatarStorage = [];
var argoStorage  = [];
var airplaneStorage = [];
var aliensStorage = [];
var arrivalStorage = [];





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

/*
document.getElementById("body").onload = function (event) {
    console.log("Onload functioning");
    console.log(moviesList[0].letters);
    console.log(moviesList[1].letters);
    console.log(moviesList[2].letters);
    console.log(moviesList[3].letters);
    console.log(moviesList[4].letters);
    //document.getElementById("winsCounter").style.block = wins;

}
*/


//Begins displaying the global counters
document.getElementById("guessesLeft").innerHTML = (lives);
document.getElementById("winsCounter").innerHTML = (wins);




//**************HANGMAN: "AVATAR" CODE **********************
document.getElementById("firstButton").onclick = function (event) {
    console.log("firstButton test");
    
    //Resets the number of lives and letter storage arrays when the button is clicked again.
    let lives = 8;
    avatarStorage = [];
    document.getElementById("guess").innerHTML = (avatarStorage);

    moviesList[4].lettercount = 6;
    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
    
   
    //"resets" the appearance of the counters and displays the word's hint
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("hint").innerHTML = ("James Cameron's greatest movie. His words.");
   
    //"resets" every letter block
    document.getElementById("firstLetter").innerHTML = ("");
    document.getElementById("secondLetter").innerHTML = ("");
    document.getElementById("thirdLetter").innerHTML = ("");
    document.getElementById("fourthLetter").innerHTML = ("");
    document.getElementById("fifthLetter").innerHTML = ("");
    document.getElementById("sixthLetter").innerHTML = ("");
    document.getElementById("seventhLetter").innerHTML = ("");
    document.getElementById("eighthLetter").innerHTML = ("");
    document.getElementById("ninthLetter").innerHTML = ("");
    document.getElementById("tenthLetter").innerHTML = ("");
    document.getElementById("eleventhLetter").innerHTML = ("");
    document.getElementById("twelfthLetter").innerHTML = ("");

    
    //begin code to check key presses and start matching word's countdown
    document.onkeypress = function (event) {
        document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);

            
        
        
            //variables to make the check letter function work
            var userLetters = event.key;
            userText.textContent = userLetters;

            //spotchecking
            console.log(userLetters);
            console.log(avatarStorage);

            //function for checking users keystrokes against the object.arrays above
            function checkLetters (letter) {
            return letter === userLetters.toLowerCase();
            }




        //sets the conditions for running this code as long as number of lives is greater than 0)
        if      (
                    (lives > 0) //checks to make sure user isn't out of lives
                    && 
                    (moviesList[4].lettercount > 0) // once the count reaches 0 the player has won
                    && 
                    (moviesList[4].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
                    &&
                    (avatarStorage.some(checkLetters) === false) //make sure letter hasn't been used before
                ) 
            {
            
            //code to push the letters to storage array
            avatarStorage.push(userLetters);

            //code to push the letter to the display
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(avatarStorage);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("guess").appendChild(node);

            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);;



            

            //checks the letters against the users input and displays them in the proper boxes
            switch (userLetters.toLowerCase()) {
                case "a":
                    moviesList[4].lettercount-=3;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";


                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";


                    document.getElementById("thirdLetter").innerHTML = "A";
                    document.getElementById("thirdLetter").style.fontSize = "30px";


                    document.getElementById("fifthLetter").innerHTML = "A";
                    document.getElementById("fifthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");


                    break;

                case "v":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";

                    document.getElementById("secondLetter").innerHTML = "V";
                    document.getElementById("secondLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");


                    break;

                case "t":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";


                    document.getElementById("fourthLetter").innerHTML = "T";
                    document.getElementById("fourthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                case "r":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";

                    document.getElementById("sixthLetter").innerHTML = "R";
                    document.getElementById("sixthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                default:
                    
                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";


                    console.log("NOT SURE WHAT JUST HAPPENED. TRY AGAIN!");

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);


        }

        else if (
            (lives > 0) //checks to make sure user isn't out of lives
                    && 
            (moviesList[4].lettercount > 0) // once the count reaches 0 the player has won
        ) {
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            avatarStorage.push(userLetters); // pushes any OTHER LETTERS TO STORAGE
            document.getElementById("hint").innerHTML = ("YOU ALREADY CHOSE THAT LETTER. TRY AGAIN"); 
            document.getElementById("guess").innerHTML = (avatarStorage);

        }

        else if (lives <= 0) {
            document.getElementById("guess").innerHTML = (avatarStorage);
            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if ((moviesList[4].lettercount === 0)) { // stops the game and increases the wins counter
            wins++;
            document.getElementById("guess").innerHTML = (avatarStorage);
            document.getElementById("hint").innerHTML = ("You Win!");
            console.log("Win Counter test");
            console.log(wins);
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (avatarStorage);
            
            


        }

        else if (avatarStorage.some(checkLetters) == true) { //notes if someone pressed the key already
            console.log("REPEAT GUESS");
            console.log(avatarStorage);
            document.getElementById("hint").innerHTML = ("YOU ALREADY CHOSE THAT LETTER. TRY AGAIN"); 
            document.getElementById("guess").innerHTML = (avatarStorage);

        }

        else { //code to note a bad key press
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("hint").innerHTML = "GAME OVER?? TEST";
            console.log("BAD LETTER");                       
            event.stopPropagation();

        }


    }
    
document.getElementById("winsCounter").innerHTML = (wins);
}

//**************HANGMAN: "AVATAR" CODE **********************
document.getElementById("firstButton").onclick = function (event) {
    console.log("firstButton test");
    
    //Resets the number of lives and letter storage arrays when the button is clicked again.
    let lives = 8;
    avatarStorage = [];
    document.getElementById("guess").innerHTML = (avatarStorage);

    moviesList[4].lettercount = 6;
    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
    
   
    //"resets" the appearance of the counters and displays the word's hint
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("hint").innerHTML = ("James Cameron's greatest movie. His words.");
   
    //"resets" every letter block
    document.getElementById("firstLetter").innerHTML = ("");
    document.getElementById("secondLetter").innerHTML = ("");
    document.getElementById("thirdLetter").innerHTML = ("");
    document.getElementById("fourthLetter").innerHTML = ("");
    document.getElementById("fifthLetter").innerHTML = ("");
    document.getElementById("sixthLetter").innerHTML = ("");
    document.getElementById("seventhLetter").innerHTML = ("");
    document.getElementById("eighthLetter").innerHTML = ("");
    document.getElementById("ninthLetter").innerHTML = ("");
    document.getElementById("tenthLetter").innerHTML = ("");
    document.getElementById("eleventhLetter").innerHTML = ("");
    document.getElementById("twelfthLetter").innerHTML = ("");

    
    //begin code to check key presses and start matching word's countdown
    document.onkeypress = function (event) {
        document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);

            
        
        
            //variables to make the check letter function work
            var userLetters = event.key;
            userText.textContent = userLetters;

            //spotchecking
            console.log(userLetters);
            console.log(avatarStorage);

            //function for checking users keystrokes against the object.arrays above
            function checkLetters (letter) {
            return letter === userLetters.toLowerCase();
            }




        //sets the conditions for running this code as long as number of lives is greater than 0)
        if      (
                    (lives > 0) //checks to make sure user isn't out of lives
                    && 
                    (moviesList[4].lettercount > 0) // once the count reaches 0 the player has won
                    && 
                    (moviesList[4].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
                    &&
                    (avatarStorage.some(checkLetters) === false) //make sure letter hasn't been used before
                ) 
            {
            
            //code to push the letters to storage array
            avatarStorage.push(userLetters);

            //code to push the letter to the display
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(avatarStorage);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("guess").appendChild(node);

            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);;



            

            //checks the letters against the users input and displays them in the proper boxes
            switch (userLetters.toLowerCase()) {
                case "a":
                    moviesList[4].lettercount-=3;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";


                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";


                    document.getElementById("thirdLetter").innerHTML = "A";
                    document.getElementById("thirdLetter").style.fontSize = "30px";


                    document.getElementById("fifthLetter").innerHTML = "A";
                    document.getElementById("fifthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");


                    break;

                case "v":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";

                    document.getElementById("secondLetter").innerHTML = "V";
                    document.getElementById("secondLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");


                    break;

                case "t":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";


                    document.getElementById("fourthLetter").innerHTML = "T";
                    document.getElementById("fourthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                case "r":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";

                    document.getElementById("sixthLetter").innerHTML = "R";
                    document.getElementById("sixthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                default:
                    
                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";


                    console.log("NOT SURE WHAT JUST HAPPENED. TRY AGAIN!");

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);


        }

        else if (
            (lives > 0) //checks to make sure user isn't out of lives
                    && 
            (moviesList[4].lettercount > 0) // once the count reaches 0 the player has won
        ) {
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            avatarStorage.push(userLetters); // pushes any OTHER LETTERS TO STORAGE
            document.getElementById("hint").innerHTML = ("YOU ALREADY CHOSE THAT LETTER. TRY AGAIN"); 
            document.getElementById("guess").innerHTML = (avatarStorage);

        }

        else if (lives <= 0) {
            document.getElementById("guess").innerHTML = (avatarStorage);
            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if ((moviesList[4].lettercount === 0)) { // stops the game and increases the wins counter
            wins++;
            document.getElementById("guess").innerHTML = (avatarStorage);
            document.getElementById("hint").innerHTML = ("You Win!");
            console.log("Win Counter test");
            console.log(wins);
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (avatarStorage);
            


        }

        else if (avatarStorage.some(checkLetters) == true) { //notes if someone pressed the key already
            console.log("REPEAT GUESS");
            console.log(avatarStorage);
            document.getElementById("hint").innerHTML = ("YOU ALREADY CHOSE THAT LETTER. TRY AGAIN"); 
            document.getElementById("guess").innerHTML = (avatarStorage);

        }

        else { //code to note a bad key press
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("hint").innerHTML = "GAME OVER?? TEST";
            console.log("BAD LETTER");                       
            event.stopPropagation();

        }


    }
    
document.getElementById("winsCounter").innerHTML = (wins);
}

//**************HANGMAN: "Argo" CODE **********************
document.getElementById("secondButton").onclick = function (event) {
    console.log("secondButton test");
    
    //Resets the number of lives and letter storage arrays when the button is clicked again.
    let lives = 8;
    argoStorage = [];
    document.getElementById("guess").innerHTML = (argoStorage);

    moviesList[3].lettercount = 4;
    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);
    
   
    //"resets" the appearance of the counters and displays the word's hint
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("hint").innerHTML = ("The one where Ben Affleck is NOT in BOSTON.");
   
    //"resets" every letter block
    document.getElementById("firstLetter").innerHTML = ("");
    document.getElementById("secondLetter").innerHTML = ("");
    document.getElementById("thirdLetter").innerHTML = ("");
    document.getElementById("fourthLetter").innerHTML = ("");
    document.getElementById("fifthLetter").innerHTML = ("");
    document.getElementById("sixthLetter").innerHTML = ("");
    document.getElementById("seventhLetter").innerHTML = ("");
    document.getElementById("eighthLetter").innerHTML = ("");
    document.getElementById("ninthLetter").innerHTML = ("");
    document.getElementById("tenthLetter").innerHTML = ("");
    document.getElementById("eleventhLetter").innerHTML = ("");
    document.getElementById("twelfthLetter").innerHTML = ("");

    
    //begin code to check key presses and start matching word's countdown
    document.onkeypress = function (event) {
        document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);

            
        
        
            //variables to make the check letter function work
            var userLetters = event.key;
            userText.textContent = userLetters;

            //spotchecking
            console.log(userLetters);
            console.log(argoStorage);

            //function for checking users keystrokes against the object.arrays above
            function checkLetters (letter) {
            return letter === userLetters.toLowerCase();
            }




        //sets the conditions for running this code as long as number of lives is greater than 0)
        if      (
                    (lives > 0) //checks to make sure user isn't out of lives
                    && 
                    (moviesList[3].lettercount > 0) // once the count reaches 0 the player has won
                    && 
                    (moviesList[3].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
                    &&
                    (argoStorage.some(checkLetters) === false) //make sure letter hasn't been used before
                ) 
            {
            
            //code to push the letters to storage array
            argoStorage.push(userLetters);

            //code to push the letter to the display
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(argoStorage);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("guess").appendChild(node);

            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);;



            

            //checks the letters against the users input and displays them in the proper boxes
            switch (userLetters.toLowerCase()) {
                case "a":
                    moviesList[3].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";


                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";



                    console.log("LETTER MATCH");


                    break;

                case "r":
                    moviesList[3].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";

                    document.getElementById("secondLetter").innerHTML = "R";
                    document.getElementById("secondLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");


                    break;

                case "g":
                    moviesList[3].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";


                    document.getElementById("thirdLetter").innerHTML = "G";
                    document.getElementById("thirdLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                case "o":
                    moviesList[3].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";

                    document.getElementById("fourthLetter").innerHTML = "O";
                    document.getElementById("fourthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                default:
                    
                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";


                    console.log("NOT SURE WHAT JUST HAPPENED. TRY AGAIN!");

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);


        }

        else if (
            (lives > 0) //checks to make sure user isn't out of lives
                    && 
            (moviesList[3].lettercount > 0) // once the count reaches 0 the player has won
        ) {
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            argoStorage.push(userLetters); // pushes any OTHER LETTERS TO STORAGE
            document.getElementById("hint").innerHTML = ("YOU ALREADY CHOSE THAT LETTER. TRY AGAIN"); 
            document.getElementById("guess").innerHTML = (argoStorage);

        }

        else if (lives <= 0) {
            document.getElementById("guess").innerHTML = (argoStorage);
            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if ((moviesList[3].lettercount === 0)) { // stops the game and increases the wins counter
            wins++;
            document.getElementById("guess").innerHTML = (argoStorage);
            document.getElementById("hint").innerHTML = ("You Win!");
            console.log("Win Counter test");
            console.log(wins);
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (argoStorage);
            


        }

        else if (argoStorage.some(checkLetters) == true) { //notes if someone pressed the key already
            console.log("REPEAT GUESS");
            console.log(argoStorage);
            document.getElementById("hint").innerHTML = ("YOU ALREADY CHOSE THAT LETTER. TRY AGAIN"); 
            document.getElementById("guess").innerHTML = (argoStorage);

        }

        else { //code to note a bad key press
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("hint").innerHTML = "GAME OVER?? TEST";
            console.log("BAD LETTER");                       
            event.stopPropagation();

        }


    }
    
document.getElementById("winsCounter").innerHTML = (wins);
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


//**************Alphabet checker "if" method****************




/*

document.onkeypress = function (event) {

    var test = ["a","r","r","i","v","a","l"];
    var alphabet = event.key;
    console.log(alphabet);

    function checkLetters (letter) {
        
        return letter === alphabet.toLowerCase();
    }

    if (test.some(checkLetters) == true) {
            
        //console.log(test[i]);
        console.log("GOOD LETTER");


    } 
    else {
            
        console.log("BAD LETTER");
    }
}


*/

/************************************************* */
/************************************************* */
/*****************NOTES******************************** */
/************************************************* */
/************************************************* */
/*
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


/*


 
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


            //****************************Letter Check / Logs the previous letters***************** */
            
            //function checkLetters (letter) {
                    //return letter === userLetters.toLowerCase();
            //}
                          
                //if (moviesList[4].letters.some(checkLetters) == true) {
                        
                   // console.log("GOOD LETTER");
            
            
                //} 
                //else {
                    
                    //console.log("BAD LETTER");
                    //event.stopPropagation();
               // }

