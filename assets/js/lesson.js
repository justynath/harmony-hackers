/// VARIABLES ///

// we get our three main query selectors here
// all of our keys to control the piano keys
// volume for controlling volume selection
// keyVisibility to toggle key letters being visible or now
// difficulty slider to set our difficulty
const keys = document.querySelectorAll(".piano-keys .key"),
  volume = document.querySelector(".volume-slider input"),
  keyVisibility = document.querySelector(".key-checkbox input");

const TIMEOUT = 200;

// now we need all of our keys
let allKeys = [];
// and we want our note sound effects (we will tie these to our datasets)
// default is a in case key not mapped
note = new Audio(`/assets/audio/A1.mp3`);

// play note function, will play the note corresponding to our key
const playNote = function (key) {
  // sets the srt to our note file chosen
  note.src = `/assets/audio/${key}.mp3`;

  // playing note
  note.play();
  // Next we want to get the clicked key, for user feedback and
  // give it an active class. it makes sense it goes in the play
  // note function here because it should fire when the note is played
  // SO we get our data set and add it to a const
  const clicked = document.querySelector(`[data-key="${key}"]`);
  // now when the note is pressed add an active class to it
  clicked.classList.add("active");
  // now we set a timeout of 200ms, give or take to remove the
  // styling from the class
  setTimeout(() => {
    // setting the timeout as a top lvl var so we don't need to dive in
    // and constantly change it
    clicked.classList.remove("active");
  }, TIMEOUT);
};
// now we loop through each key, then for each key add an onclick Event
// listener to make sure that when said key is clicked it will play the
// corresponding sound
keys.forEach((key) => {
  // adding data-key value to the allKeys array
  allKeys.push(key.dataset.key);
  // calling playTune function with passing data-key value as an argument
  key.addEventListener("click", () => playNote(key.dataset.key));
});

// Volume control function
const handleVolume = function (e) {
  // we get the volume slider value as an audio volume here
  note.volume = e.target.value;
};

// Hide keys control function
const keyVisibilityToggle = function () {
  // We loop through the keys here and hide
  keys.forEach((key) => key.classList.toggle("hide"));
  console.log("volume switched");
};

// we want to get our pressed key for registration this error handling
// to ensure note does audio for notes only plays on key click and not by accident
const pressedKey = function (e) {
  // check if our key contained in the all keys array
  if (allKeys.includes(e.key)) {
    // if it is play note
    playNote(e.key);
  }
};

// now we get our event listener for 3 controls
keyVisibility.addEventListener("click", keyVisibilityToggle);
volume.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

//
// Game Logic Starts Here
//
//

// Array of flashcards
const flashcards = [
  { src: "assets/flashcards/c-1.png", card: "C1", alt: "c-1", noteName: 'C4' },
  { src: "assets/flashcards/c-sharp-1.png", card: "CS1", alt: "c-sharp-1", noteName: 'C#4'},
  { src: "assets/flashcards/d-flat-1.png", card: "CS1", alt: "d-flat-1", noteName: "D♭4" },
  { src: "assets/flashcards/d-1.png", card: "D1", alt: "d-1", noteName: "D4" },
  { src: "assets/flashcards/d-sharp-1.png", card: "DS1", alt: "d-sharp-1", noteName: "D#4" },
  { src: "assets/flashcards/e-flat-1.png", card: "DS1", alt: "e-flat-1", noteName: "E♭4" },
  { src: "assets/flashcards/e-1.png", card: "E1", alt: "e-1", noteName: "E4" },
  { src: "assets/flashcards/f-1.png", card: "F1", alt: "f-1", noteName: "F4" },
  { src: "assets/flashcards/f-sharp-1.png", card: "FS1", alt: "f-sharp-1", noteName: "F#4" },
  { src: "assets/flashcards/g-flat-1.png", card: "FS1", alt: "g-flat-1", noteName: "G♭4" },
  { src: "assets/flashcards/g-1.png", card: "G1", alt: "g-1", noteName: "G4" },
  { src: "assets/flashcards/g-sharp-1.png", card: "GS1", alt: "g-sharp-1", noteName: "G#4" },
  { src: "assets/flashcards/a-flat-1.png", card: "GS1", alt: "a-flat-1", noteName: "A♭4" },
  { src: "assets/flashcards/a-1.png", card: "A1", alt: "a-1", noteName: "A4" },
  { src: "assets/flashcards/a-sharp-1.png", card: "AS1", alt: "a-sharp-1", noteName: "A#4" },
  { src: "assets/flashcards/b-flat-1.png", card: "AS1", alt: "b-flat-1", noteName: "B♭4" },
  { src: "assets/flashcards/b-1.png", card: "B1", alt: "b-1", noteName: "B4" },
  { src: "assets/flashcards/c-2.png", card: "C2", alt: "c-2", noteName: "C5" },
  { src: "assets/flashcards/c-sharp-2.png", card: "CS2", alt: "c-sharp-2", noteName: "C#5" },
  { src: "assets/flashcards/d-flat-2.png", card: "CS2", alt: "d-flat-2", noteName: "D♭5" },
  { src: "assets/flashcards/d-2.png", card: "D2", alt: "d-2", noteName: "D5" },
  { src: "assets/flashcards/d-sharp-2.png", card: "DS2", alt: "d-sharp-2", noteName: "D#5" },
  { src: "assets/flashcards/e-flat-2.png", card: "DS2", alt: "e-flat-2", noteName: "E♭5" },
  { src: "assets/flashcards/e-2.png", card: "E2", alt: "e-2", noteName: "E5" },
  { src: "assets/flashcards/f-2.png", card: "F2", alt: "f-2", noteName: "F5" },
  { src: "assets/flashcards/f-sharp-2.png", card: "FS2", alt: "f-sharp-2", noteName: "F#5" },
  { src: "assets/flashcards/g-flat-2.png", card: "FS2", alt: "g-flat-2", noteName: "G♭5" },
  { src: "assets/flashcards/g-2.png", card: "G2", alt: "g-2", noteName: "G5" },
  { src: "assets/flashcards/g-sharp-2.png", card: "GS2", alt: "g-sharp-2", noteName: "G#5" },
  { src: "assets/flashcards/a-flat-2.png", card: "GS2", alt: "a-flat-2", noteName: "A♭5" },
  { src: "assets/flashcards/a-2.png", card: "A2", alt: "a-2", noteName: "A5" },
  { src: "assets/flashcards/a-sharp-2.png", card: "AS2", alt: "a-sharp-2", noteName: "A#5" },
  { src: "assets/flashcards/b-flat-2.png", card: "AS2", alt: "b-flat-2", noteName: "B♭5" },
  { src: "assets/flashcards/b-2.png", card: "B2", alt: "b-2", noteName: "B5" },
  { src: "assets/flashcards/c-3.png", card: "C3", alt: "c-3", noteName: "C6" }
];


let currentFlashcard = null;
let score = 0;
let totalQuestions = 0;
let timeLeft = 120; // 2 minutes
let gameStarted = false;

function generateRandomFlashcard() {
  const randomIndex = Math.floor(Math.random() * flashcards.length);
  currentFlashcard = flashcards[randomIndex];

  // Update the src attribute of the new flashcard image element
  const flashcardImage = document.getElementById("flashcard-image");
  flashcardImage.src = currentFlashcard.src;
  flashcardImage.alt = currentFlashcard.alt;

  // Reset feedback for the new card
  const feedbackElement = document.getElementById("feedback");
  feedbackElement.textContent = "";
}



function handlePianoKeyClick(event) {
  if (!gameStarted) return; // Don't handle clicks if the game hasn't started

  const clickedKey = event.target.closest(".key");
  const clickedKeyData = clickedKey.dataset.key;
  const feedbackElement = document.getElementById("feedback");

  if (clickedKeyData === currentFlashcard.card) {
    score++;
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
    clickedKey.classList.add("correct"); // Add the correct class to the clicked key
  } else {
    feedbackElement.textContent = `Incorrect! The correct note was: ${currentFlashcard.noteName}`;
    feedbackElement.style.color = "red";
    clickedKey.classList.add("incorrect"); // Add the incorrect class to the clicked key
  }
  totalQuestions++;

  setTimeout(() => {
    clickedKey.classList.remove("correct", "incorrect");
    generateRandomFlashcard(); // Show the next flashcard after a short delay
  }, 1000); // 1 second delay to give user time to see the feedback
}

function startGame() {
  gameStarted = true;
  score = 0;
  totalQuestions = 0;
  timeLeft = 120; // Reset the timer (2 Minutes)

  generateRandomFlashcard();
  const pianoKeys = document.querySelectorAll(".piano-keys .key");
  pianoKeys.forEach((key) =>
    key.addEventListener("click", handlePianoKeyClick)
  );

  // Timer
  const timerElement = document.getElementById("timer");
  const intervalId = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(intervalId);
      endGame();
    }
  }, 1000);
}

function endGame() {
  gameStarted = false;
  alert(`Your Score: ${score}/${totalQuestions}`)
  const pianoKeys = document.querySelectorAll(".piano-keys .key");
  pianoKeys.forEach((key) =>
    key.removeEventListener("click", handlePianoKeyClick)
  );
}

document.getElementById("start-game").addEventListener("click", startGame);

document.getElementById("how-to-play").addEventListener("click", () => {
  alert(
    "Match the note displayed with the correct piano key. You have 2 minutes to score as many correct answers as possible!"
  );
});

//
// Game Logic Ends Here
//
//
