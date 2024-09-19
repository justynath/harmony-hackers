// Function to display the working message
function displayWorkingMessage() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "It's working! Yay!";
    document.body.appendChild(paragraph);
  
    // Add animation to the paragraph
    setInterval(() => {
      if (!paragraph.style.animation) {
        paragraph.style.animation = "color-change 1s infinite";
      }
    }, 500);
  }
  
  // Display the working message
  displayWorkingMessage();