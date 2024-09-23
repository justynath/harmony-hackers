/// VARIABLES ///

// Main selectors for DOM elements
const keys = document.querySelectorAll(".piano-keys .key"); // Select all piano key elements
const volume = document.querySelector(".volume-slider input"); // Select volume slider input

// Constants
const TIMEOUT = 200; // Timeout duration for key highlight effect in milliseconds
let allKeys = []; // Array to store the data-key attributes of all keys
let note = new Audio(`assets/audio/A1.mp3`); // Default note audio object with a starting audio file

/// FUNCTIONS ///


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  
  if (prevScrollpos > currentScrollPos) {
    // Show navbar when scrolling up
    document.getElementById("navbar").style.top = "0";
  } else {
    // Hide navbar when scrolling down
    document.getElementById("navbar").style.top = "-80px"; // Adjust based on your navbar's height
  }
  
  prevScrollpos = currentScrollPos;
};

// Play the note associated with the key
const playNote = (key) => {
  note.src = `assets/audio/${key}.mp3`; // Set the source of the audio to the corresponding key sound
  note.play(); // Play the sound

  const clickedKey = document.querySelector(`[data-key="${key}"]`); // Get the key DOM element by data-key
  clickedKey.classList.add("active"); // Add the 'active' class to the key to visually indicate it has been pressed
  // Remove the 'active' class after a short delay (200ms)
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, TIMEOUT);
};

// Add event listeners to each key for mouse click events
keys.forEach((key) => {
  allKeys.push(key.dataset.key); // Add the data-key of each key to the allKeys array
  key.addEventListener("click", () => playNote(key.dataset.key)); // Add click event listener to play the note on key click
});

// Volume control handler to adjust note volume
const handleVolume = (e) => {
  note.volume = e.target.value; // Adjust the volume of the note based on the slider input value
};

// Handle keyboard key press to play the corresponding note
const handleKeyPress = (e) => {
  if (allKeys.includes(e.key)) {
    playNote(e.key); // Play the note if the pressed key matches any in the allKeys array
  }
};

volume.addEventListener("input", handleVolume); // Adjust volume when the volume slider is changed
document.addEventListener("keydown", handleKeyPress); // Play note when a corresponding key is pressed on the keyboard

/// GAME LOGIC ///

// Flashcards array representing different musical notes with corresponding image, note name, and alt text
const flashcards = [
  { 
    src: "assets/flashcards/c-1.png",
    card: "C1",
    alt: "c-1",
    noteName: "C4"
  },
  {
    src: "assets/flashcards/c-sharp-1.png",
    card: "CS1",
    alt: "c-sharp-1",
    noteName: "C#4",
  },
  {
    src: "assets/flashcards/d-flat-1.png",
    card: "CS1",
    alt: "d-flat-1",
    noteName: "D♭4",
  },
  {
    src: "assets/flashcards/d-1.png",
    card: "D1",
    alt: "d-1",
    noteName: "D4"
  },
  {
    src: "assets/flashcards/d-sharp-1.png",
    card: "DS1",
    alt: "d-sharp-1",
    noteName: "D#4",
  },
  {
    src: "assets/flashcards/e-flat-1.png",
    card: "DS1",
    alt: "e-flat-1",
    noteName: "E♭4",
  },
  { src: "assets/flashcards/e-1.png",
    card: "E1",
    alt: "e-1",
    noteName: "E4"
  },
  {
    src: "assets/flashcards/f-1.png",
    card: "F1",
    alt: "f-1",
    noteName: "F4"
  },
  {
    src: "assets/flashcards/f-sharp-1.png",
    card: "FS1",
    alt: "f-sharp-1",
    noteName: "F#4",
  },
  {
    src: "assets/flashcards/g-flat-1.png",
    card: "FS1",
    alt: "g-flat-1",
    noteName: "G♭4",
  },
  {
    src: "assets/flashcards/g-1.png",
    card: "G1",
    alt: "g-1",
    noteName: "G4"
  },
  {
    src: "assets/flashcards/g-sharp-1.png",
    card: "GS1",
    alt: "g-sharp-1",
    noteName: "G#4",
  },
  {
    src: "assets/flashcards/a-flat-1.png",
    card: "GS1",
    alt: "a-flat-1",
    noteName: "A♭4",
  },
  {
    src: "assets/flashcards/a-1.png",
    card: "A1",
    alt: "a-1",
    noteName: "A4"
  },
  {
    src: "assets/flashcards/a-sharp-1.png",
    card: "AS1",
    alt: "a-sharp-1",
    noteName: "A#4",
  },
  {
    src: "assets/flashcards/b-flat-1.png",
    card: "AS1",
    alt: "b-flat-1",
    noteName: "B♭4",
  },
  { 
    src: "assets/flashcards/b-1.png",
    card: "B1",
    alt: "b-1",
    noteName: "B4" 
  },
  { 
    src: "assets/flashcards/c-2.png",
    card: "C2",
    alt: "c-2",
    noteName: "C5" 
  },
  {
    src: "assets/flashcards/c-sharp-2.png",
    card: "CS2",
    alt: "c-sharp-2",
    noteName: "C#5",
  },
  {
    src: "assets/flashcards/d-flat-2.png",
    card: "CS2",
    alt: "d-flat-2",
    noteName: "D♭5",
  },
  { src: "assets/flashcards/d-2.png", card: "D2", alt: "d-2", noteName: "D5" },
  {
    src: "assets/flashcards/d-sharp-2.png",
    card: "DS2",
    alt: "d-sharp-2",
    noteName: "D#5",
  },
  {
    src: "assets/flashcards/e-flat-2.png",
    card: "DS2",
    alt: "e-flat-2",
    noteName: "E♭5",
  },
  { 
    src: "assets/flashcards/e-2.png",
    card: "E2",
    alt: "e-2",
    noteName: "E5" 
  },
  { 
    src: "assets/flashcards/f-2.png",
    card: "F2",
    alt: "f-2",
    noteName: "F5"
  },
  {
    src: "assets/flashcards/f-sharp-2.png",
    card: "FS2",
    alt: "f-sharp-2",
    noteName: "F#5",
  },
  {
    src: "assets/flashcards/g-flat-2.png",
    card: "FS2",
    alt: "g-flat-2",
    noteName: "G♭5",
  },
  { src: "assets/flashcards/g-2.png",
    card: "G2",
    alt: "g-2",
    noteName: "G5"
  },
  {
    src: "assets/flashcards/g-sharp-2.png",
    card: "GS2",
    alt: "g-sharp-2",
    noteName: "G#5",
  },
  {
    src: "assets/flashcards/a-flat-2.png",
    card: "GS2",
    alt: "a-flat-2",
    noteName: "A♭5",
  },
  {
    src: "assets/flashcards/a-2.png",
    card: "A2",
    alt: "a-2",
    noteName: "A5"
  },
  {
    src: "assets/flashcards/a-sharp-2.png",
    card: "AS2",
    alt: "a-sharp-2",
    noteName: "A#5",
  },
  {
    src: "assets/flashcards/b-flat-2.png",
    card: "AS2",
    alt: "b-flat-2",
    noteName: "B♭5",
  },
  { src: "assets/flashcards/b-2.png", card: "B2", alt: "b-2", noteName: "B5" },
  { src: "assets/flashcards/c-3.png", card: "C3", alt: "c-3", noteName: "C6" },
  { src: "assets/flashcards/c-3.png", card: "C3", alt: "c-3", noteName: "C6" },
];

let currentFlashcard = null; // Current flashcard in the game
let score = 0; // Player's score
let totalQuestions = 0; // Total number of questions asked in the game
let timeLeft = 30; // Time left for the game in seconds
let gameStarted = false; // Boolean to track whether the game has started
let intervalId; // ID for the interval used in the timer
let difficulty = "";
let win; // tracking if we win or not

let diffSelector = document.getElementById("diff-select");
const selectDifficulty = () => {
  let difficulties = document.getElementById("diff-select");
  difficulty = difficulties.value;
};

let winLossCheck = (e) => {
  if (e < Number(10)) {
    document.getElementById("victory-screen").innerHTML =
      "You need more than 10 to pass! Try Again!";
  } else if (e > 10) {
    document.getElementById(
      "victory-screen"
    ).innerHTML = `Congratulations! You scored ${score}. You win!`;
  }
};

// Generate a random flashcard to display
const generateRandomFlashcard = () => {
  const randomIndex = Math.floor(Math.random() * flashcards.length); // Generate a random index
  currentFlashcard = flashcards[randomIndex]; // Select a flashcard from the array

  const flashcardImage = document.getElementById("flashcard-image"); // Get the flashcard image element
  flashcardImage.src = currentFlashcard.src; // Set the source of the flashcard image
  flashcardImage.alt = currentFlashcard.alt; // Set the alt text for the flashcard image
  if (difficulty == "easy" || difficulty == "medium") {
    document.getElementById(
      "assistance"
    ).innerHTML = `The above note is ${currentFlashcard.noteName}`;
  } else {
    document.getElementById("assistance").innerHTML = "";
  }
  document.getElementById("feedback").textContent = ""; // Clear feedback message
};

// Handle click on a piano key during the game
const handlePianoKeyClick = (event) => {
  if (!gameStarted) return; // Do nothing if the game hasn't started

  const clickedKey = event.target.closest(".key"); // Get the clicked key element
  const clickedKeyData = clickedKey.dataset.key; // Get the data-key attribute of the clicked key
  const feedbackElement = document.getElementById("feedback"); // Get the feedback message element

  // Check if the clicked key matches the current flashcard
  if (clickedKeyData === currentFlashcard.card) {
    score++; // Increase score if correct
    feedbackElement.innerHTML = "CORRECT!<br>Well Done!"; // Show success message
    feedbackElement.classList.add("green"); // Add 'green' class to the feedback for correct answer
    clickedKey.classList.add("correct"); // Add 'correct' class to the key
  } else {
    // Show incorrect feedback if the wrong key is pressed
    feedbackElement.innerHTML = `INCORRECT!<br><span class="fs-4">The correct note was: ${currentFlashcard.noteName}<span>`;
    feedbackElement.classList.add("red"); // Add 'red' class for incorrect answer
    clickedKey.classList.add("incorrect"); // Add 'incorrect' class to the key
  }
  totalQuestions++; // Increment total questions count

  // After a delay, reset the key and feedback styles and generate a new flashcard
  setTimeout(() => {
    clickedKey.classList.remove("correct", "incorrect"); // Remove the correct/incorrect classes
    feedbackElement.classList.remove("green", "red"); // Remove feedback color classes
    generateRandomFlashcard(); // Generate a new random flashcard
  }, 1000);
};

// Start the game and initialize variables
const startGame = () => {
  selectDifficulty();
  if (!difficulty) {
    alert("Please Select A Difficulty");
    return;
  } else {
    diffSelector.disabled = true;
    generateRandomFlashcard(); // Generate the first flashcard
    gameStarted = true; // Set gameStarted to true
    score = 0; // Reset score
    totalQuestions = 0; // Reset total questions
    if (difficulty == "easy") {
      timeLeft = 90;
    } else if (difficulty == "medium") {
      timeLeft = 60;
    } else if (difficulty == "hard") {
      timeLeft = 60;
    } else if (difficulty == "maestro") {
      timeLeft = 30;
      keys.forEach((key) => key.classList.toggle("hide")); // Toggle the 'hide' class on each key to show/hide labels
    }
    const wrapper = document.getElementById("flashcard-wrapper"); // Get flashcard wrapper element
    wrapper.classList.remove("hidden", "fade-out"); // Show the flashcard wrapper
    wrapper.classList.add("fade-in", "show"); // Add fade-in animation

    const pianoKeys = document.querySelectorAll(".piano-keys .key"); // Get all piano keys
    pianoKeys.forEach((key) =>
      key.addEventListener("click", handlePianoKeyClick)
    ); // Add click listeners to each key

    const timerElement = document.getElementById("timer"); // Get the timer element
    intervalId = setInterval(() => {
      timeLeft--; // Decrease time left by 1 second
      timerElement.textContent = `Time Left: ${timeLeft}s`; // Update timer display
      if (timeLeft <= 0) {
        clearInterval(intervalId); // Stop the timer when time runs out
        winLossCheck(score);
        endGame(); // End the game
      }
    }, 1000); // Repeat every second

    document.getElementById("start-game").textContent = "Stop Game"; // Change button text to 'Stop Game'
  }
  document.getElementById("start-game").textContent = "Stop Game"; // Change button text to 'Stop Game'
};

// Stop the game
const stopGame = () => {
  diffSelector.disabled = false;
  keys.forEach((key) => key.classList.remove("hide")); // Toggle the 'hide' class on each key to show/hide labels
  winLossCheck(score);
  gameStarted = false; // Set gameStarted to false
  clearInterval(intervalId); // Clear the timer interval

  const wrapper = document.getElementById("flashcard-wrapper"); // Get flashcard wrapper element
  wrapper.classList.add("fade-out"); // Add fade-out animation

  setTimeout(() => {
    wrapper.classList.remove("show"); // Hide flashcard wrapper after fade-out
    wrapper.classList.add("hidden");
    wrapper.classList.remove("fade-out");
  }, 500); // Delay to match fade-out animation duration

  const pianoKeys = document.querySelectorAll(".piano-keys .key"); // Get all piano keys

  pianoKeys.forEach((key) =>
    key.removeEventListener("click", handlePianoKeyClick)
  ); // Remove click listeners from keys

  showStopGameModal(); // Show modal with the stop game score
  document.getElementById("start-game").textContent = "Start Game"; // Change button text back to 'Start Game'
};

// End the game when time runs out
const endGame = () => {
  gameStarted = false; // Set gameStarted to false
  clearInterval(intervalId); // Clear the timer interval

  const wrapper = document.getElementById("flashcard-wrapper"); // Get flashcard wrapper element
  wrapper.classList.add("fade-out"); // Add fade-out animation

  setTimeout(() => {
    wrapper.classList.remove("show"); // Hide flashcard wrapper after fade-out
    wrapper.classList.add("hidden");
    wrapper.classList.remove("fade-out");
  }, 500); // Delay to match fade-out animation duration

  const pianoKeys = document.querySelectorAll(".piano-keys .key"); // Get all piano keys

  pianoKeys.forEach((key) =>
    key.removeEventListener("click", handlePianoKeyClick)
  ); // Remove click listeners from keys

  showGameOverModal(`Time's up! Your Score: ${score}/${totalQuestions}`); // Show game over modal with the final score
  document.getElementById("start-game").textContent = "Start Game"; // Change button text back to 'Start Game'
};

// Toggle between starting and stopping the game
const toggleGame = () => {
  gameStarted ? stopGame() : startGame(); // Start or stop the game based on current state
};

// Attach event listener to the start/stop button
document.getElementById("start-game").addEventListener("click", toggleGame);

/// MODAL FUNCTIONALITY ///

// Instructions modal logic
const instructionModal = document.getElementById("instructionModal");
const instructionButton = document.getElementById("instructionButton");
const closeInstruction = document.querySelector(".close");

// Open the instructions modal when the instructions button is clicked
instructionButton.addEventListener("click", () => {
  instructionModal.style.visibility = "visible";
  instructionModal.style.display = "flex";
});

// Close the instructions modal when the close button is clicked
closeInstruction.addEventListener("click", () => {
  instructionModal.style.visibility = "hidden";
  instructionModal.style.display = "none";
});

// Close the instructions modal if the user clicks outside of it
window.addEventListener("click", (e) => {
  if (e.target === instructionModal) {
    instructionModal.style.visibility = "hidden";
    instructionModal.style.display = "none";
  }
});

// Game over modal logic
const gameOverModal = document.getElementById("gameOverModal");
const closeGameOver = document.querySelector(".close-gameover");
const gameOverMessage = document.getElementById("gameOverMessage");
const playAgainButton = document.getElementById("playAgainButton");

// Show the game over modal with a custom message
const showGameOverModal = (message) => {
  gameOverMessage.innerHTML = message; // Set the message in the game over modal
  gameOverModal.style.display = "flex"; // Show the modal
};

// Close the game over modal when the close button is clicked
const closeGameOverModal = () => {
  gameOverModal.style.display = "none"; // Hide the modal
};

closeGameOver.addEventListener("click", closeGameOverModal); // Attach event listener to close button
playAgainButton.addEventListener("click", () => {
  closeGameOverModal(); // Close the modal
  startGame(); // Restart the game
});

// Close the game over modal if the user clicks outside of it
window.addEventListener("click", (e) => {
  if (e.target === gameOverModal) {
    closeGameOverModal(); // Close the modal
  }
});

// Stop game modal logic
const stopGameModal = document.getElementById("stopGameModal");
const closeStopGameButton = document.querySelector(".close-stopgame");
const stopGameScore = document.getElementById("stopGameScore");
const restartGameButton = document.getElementById("restartGameButton");
const closeStopGameModalButton = document.getElementById(
  "closeStopGameModalButton"
);

// Show the stop game modal with the current score
const showStopGameModal = () => {
  stopGameScore.textContent = `${score}/${totalQuestions}`; // Display the score
  stopGameModal.style.display = "flex"; // Show the modal
};

// Close the stop game modal
const closeStopGameModal = () => {
  stopGameModal.style.display = "none"; // Hide the modal
};

closeStopGameButton.addEventListener("click", closeStopGameModal); // Attach event listener to close button
closeStopGameModalButton.addEventListener("click", closeStopGameModal); // Attach event listener to additional close button

restartGameButton.addEventListener("click", () => {
  closeStopGameModal(); // Close the modal
  startGame(); // Restart the game
});

// Close the stop game modal if the user clicks outside of it
window.addEventListener("click", (e) => {
  if (e.target === stopGameModal) {
    closeStopGameModal(); // Close the modal
  }
});

// Learn notes modal logic
const learnNotesModal = document.getElementById("learnNotesModal");
const learnNotesButton = document.getElementById("learn-notes");
const closeLearnButton = document.querySelector(".close-learn");
const closeLearnModalButton = document.getElementById("closeLearnModalButton");

// Show the learn notes modal when the button is clicked
learnNotesButton.addEventListener("click", () => {
  learnNotesModal.style.display = "flex"; // Show the modal
});

// Close the learn notes modal when the close button is clicked
closeLearnButton.addEventListener("click", () => {
  learnNotesModal.style.display = "none"; // Hide the modal
});

if (closeLearnModalButton) {
  // Close the learn notes modal when the additional close button is clicked
  closeLearnModalButton.addEventListener("click", () => {
    learnNotesModal.style.display = "none"; // Hide the modal
  });
}

// Close the learn notes modal if the user clicks outside of it
window.addEventListener("click", (e) => {
  if (e.target === learnNotesModal) {
    learnNotesModal.style.display = "none"; // Hide the modal
  }
});
