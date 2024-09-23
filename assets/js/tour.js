const driver = window.driver.js.driver;

const driverObj = driver({
    showProgress: true,
    steps: [
        {
            element: "#piano-keys",
            popover: {
                className: "first-step-popover-class",
                title: "Piano Keys",
                description: "This is the piano. Click a key to hear its sound and match it with the flashcard.",
                position: "top"
            }
        },
        {
            element: "#start-game",
            popover: {
                className: "first-step-popover-class",
                title: "Start Game Button",
                description: "Click here to start the flashcard game and test your note recognition skills.",
                position: "top"
            }
        },
        {
            element: "#instructionButton",
            popover: {
                className: "first-step-popover-class",
                title: "How to Play",
                description: "Click this button to read the game instructions before you begin.",
                position: "top"
            }
        },
        {
            element: ".volume-slider",
            popover: {
                className: "first-step-popover-class",
                title: "Volume Control",
                description: "Use this slider to adjust the volume of the piano sound.",
                position: "top"
            }
        },
        {
            element: "#learn-notes",
            popover: {
                className: "first-step-popover-class",
                title: "Learn the notes",
                description: "Click this button to learn the different notes on the Staff. Learning this will help you improve your score in the game.",
                position: "top"
            }
        },
        {
            element: "#diff-select",
            popover: {
                className: "first-step-popover-class",
                title: "Difficulty Settings",
                // description: "Use this dropdown to change the difficulty.<br>Easy: 90s and note names<br>Medium: 60s and note names are displayed<br>Hard: 60s and note names are hidden<br>Maestro: 30s, note names and key names are hidden",
                description: "Use this dropdown to adjust the difficulty level:<br><strong>Easy:</strong> 90 seconds with note names visible.<br><strong>Medium:</strong> 60 seconds with note names visible.<br><strong>Hard:</strong> 60 seconds with note names hidden.<br><strong>Maestro:</strong> 30 seconds with both note and key names hidden.",
                position: "top"
            }
        },
    ]
});

driverObj.drive();
