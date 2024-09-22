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
            element: ".key-checkbox input[type='checkbox']",
            popover: {
                className: "first-step-popover-class",
                title: "Show Key Names",
                description: "Toggle this checkbox to show or hide the names of the piano keys.",
                position: "top"
            }
        },
    ]
});

driverObj.drive();
