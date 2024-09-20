/// VARIABLES ///

// we get our three main query selectors here
// all of our keys to control the piano keys
// volume for controlling volume selection
// keyVisibility to toggle key letters being visible or now
// difficulty slider to set our difficulty
const keys = document.querySelectorAll(".piano-keys .key"),
  volume = document.querySelector(".volume-slider input"),
  keysVisibility = document.querySelector(".keys-checkbox input");

// now we need all of our keys
let allKeys = [];
// and we want our audio sound effects (we will tie these to our datasets)
// default is a in case key not mapped
audio = new Audio(`../assets/audio/A1.mp3`);

// play note function, will play the note corresponding to our key
const playNote = function (key) {
  // sets the srt to our audio file chosen
  audio.src = `../assets/audio/${key}.mp3`;
  console.log(audio);
  // playing audio
  audio.play();
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
