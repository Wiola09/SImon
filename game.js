var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;

/* alert("des ba"); */
function nextSequence() {
  level++;
  userClickedPattern = [];
  $("h1").text("Level " + level);
  var slBroj = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[slBroj];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  /*  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play(); */
}
$(".btn").click(function () {
  var userChosenColouralert = this.id;
  console.log(userChosenColouralert);
  /*  Njeno rešenje : //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id"); */
  userClickedPattern.push(userChosenColouralert);
  /* var audiocl = new Audio("sounds/" + userChosenColouralert + ".mp3");
    audiocl.play(); */
  /* animatePress(userChosenColouralert); */
  playSound(userChosenColouralert);
  
  checkAnswer(userClickedPattern.length-1)
    
  
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour) {
  $("#" + currentColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}

/* Moje vežbanje */
/* randomChosenColour = nextSequence();
var sel = "div#" + randomChosenColour;
console.log(sel);
$(sel).addClass("pressed");

setTimeout(function () {
  $(sel).removeClass("pressed");
}, 100);

var pesma = "sounds/" + randomChosenColour + ".mp3";
console.log(pesma);
var crash = new Audio("sounds/red.mp3");
crash.play();
 */

$(document).keypress(function () {
  if (!started) {
    /*         //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
     */ $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

var level = 0;

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel] ) {
    console.log("success");
    console.log(userClickedPattern);
    console.log(gamePattern);
/* //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
 */if (userClickedPattern.length === gamePattern.length){

/*     //5. Call nextSequence() after a 1000 millisecond delay.
 */    setTimeout(function () {
      nextSequence();
    }, 1000);

  }

  } else {

    /* console.log(userClickedPattern);
    console.log(gamePattern); */
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
