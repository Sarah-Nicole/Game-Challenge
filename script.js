
const buttonColours = ["red", "blue", "green", "yellow"]
const gamePattern = [];


const blueSound = new Audio ("sounds/blue.mp3"); 
const greenSound = new Audio ("sounds/green.mp3"); 
const redSound = new Audio ("sounds/red.mp3"); 
const yellowSound = new Audio ("sounds/yellow.mp3"); 
const wrongSound = new Audio ("sounds/wrong.mp3"); 



function nextSequence(){
   let randomNumber = Math.floor(Math.random()*4);
   let randomChosenColor = buttonColours[randomNumber]; 
   gamePattern.push(randomChosenColor);
   //animate the button selected
   $("#" + randomChosenColor).fadeOut(60).fadeIn(60);

   let chosenSound = randomChosenColor + "Sound"; 
   chosenSound.play(); 

}

