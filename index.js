// Select the button and text elements
const changeTextButton = document.getElementById("changeTextButton");
const textDisplay = document.getElementById("textDisplay");

// Add an event listener for the button click to change the text
changeTextButton.addEventListener("click", function() {
    textDisplay.textContent = "You have Mental Issue";
});
