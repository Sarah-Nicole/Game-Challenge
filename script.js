
const buttonColours = ["red", "blue", "green", "yellow"]
const gamePattern = [];


 
let wrongSound = new Audio ("sounds/wrong.mp3"); 

function nextSequence(){
   let randomNumber = Math.floor(Math.random()*4);
   let randomChosenColor = buttonColours[randomNumber]; 
   gamePattern.push(randomChosenColor);
   //animate the button selected
   $("#" + randomChosenColor).fadeOut(60).fadeIn(60);

   //play the sound of the button selected
   let chosenSound = new Audio ("sounds/" + randomChosenColor + ".mp3");
   chosenSound.play(); 

}

