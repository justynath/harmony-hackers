/// VARIABLES ///

// we get our three main query selectors here
// all of our keys to control the piano keys
// volume for controlling volume selection
// keyVisibility to toggle key letters being visible or now
// difficulty slider to set our difficulty
const keys = document.querySelectorAll(".piano-keys .key"),
  volume = document.querySelector(".volume-slider input"),
  keysVisibility = document.querySelector(".keys-checkbox input");
