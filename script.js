
const buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0; 


 

// ---------- Game rules --------------

function checkAnswer(currentLevel){
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
     
      if(userClickedPattern.length === gamePattern.length){
         setTimeout(function() {
            nextSequence();
         }, 1500);
         userClickedPattern =[]
      }
   } else {
      // sound wrong
      let wrongSound = new Audio ("sounds/wrong.mp3"); 
      wrongSound.play();
      // red background
      $("body").addClass("game-over");
      setTimeout(function(){
         $("body").removeClass("game-over");
      }, 200);
      // changed title
      $("h1").text("Game Over, press any key to restart.");
      // preparations to start over
      startOver();
   }
}

function nextSequence(){
   let randomNumber = Math.floor(Math.random()*4);
   let randomChosenColor = buttonColours[randomNumber]; 
   gamePattern.push(randomChosenColor);

   animatePress(randomChosenColor);
   playSound(randomChosenColor);

   //increase the level in title
   level ++; 
   $("h1").text("Level " + level); 
}

function startOver(){
   level = 0; 
   gamePattern = []; 
   gameStarted = false; 
   userClickedPattern = [];
}

// --------------  Animation Rules -----------------

//play the sound of the button selected
function playSound(name){
   let chosenSound = new Audio ("sounds/" + name + ".mp3");
   chosenSound.play(); 
}

//animate the button selected
function animatePress(currentColor){
   let pressedBtn = $("#" + currentColor); 
   pressedBtn.addClass("pressed");
   setTimeout(function() {
      pressedBtn.removeClass("pressed");
   }, 100);
}



// --------------- User Imputs ---------------

// keypress to start the game
$(document).on("keydown", function (){

   if (gameStarted !== true){
      $("h1").text("Level " + level); 
      nextSequence();
      gameStarted = true;
   }
   });


// button clicked by the user 
$(".btn").on("click", function(){
   let userChosenColor = $(this).attr("id"); 
   userClickedPattern.push(userChosenColor); 

   animatePress(userChosenColor); 
   playSound(userChosenColor);
   checkAnswer(userClickedPattern.length -1);

});




