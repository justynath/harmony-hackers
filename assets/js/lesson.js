/// VARIABLES ///

// we get our three main query selectors here
// all of our keys to control the piano keys
// volume for controlling volume selection
// keyVisibility to toggle key letters being visible or now
// difficulty slider to set our difficulty
const keys = document.querySelectorAll(".piano-keys .key"),
  volume = document.querySelector(".volume-slider input"),
  keysVisibility = document.querySelector(".keys-checkbox input");

const TIMEOUT = 1000;

// now we need all of our keys
let allKeys = [];
// and we want our audio sound effects (we will tie these to our datasets)
// default is a in case key not mapped
note = new Audio(`../assets/audio/A1.mp3`);

// play note function, will play the note corresponding to our key
const playNote = function (key) {
  // sets the srt to our audio file chosen
  note.src = `../assets/audio/${key}.mp3`;
  // playing audio
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

// FOR FLASHCARDS
// const variable = flashcard.dataset.key

// const variable2 = key.dataset.key

// if variable1 == variable2:
//   clicked.classList.add("correct");
// else:
// clicked.classList.add("incorrect");
