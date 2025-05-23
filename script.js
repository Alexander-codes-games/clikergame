let coinCount = 0;
let clickValue = 1;
let upgrade1Cost = 10;
let upgrade2Cost = 50;

// Get HTML elements
const coinDisplay = document.getElementById('coinCount');
const clickButton = document.getElementById('clickButton');
const upgrade1Button = document.getElementById('upgrade1');
const upgrade2Button = document.getElementById('upgrade2');

// Function to update the coin display
function updateDisplay() {
    coinDisplay.textContent = coinCount;
}

// Function for the main click action
clickButton.addEventListener('click', () => {
    coinCount += clickValue;
    updateDisplay();
});

// Function to buy upgrade 1
upgrade1Button.addEventListener('click', () => {
    if (coinCount >= upgrade1Cost) {
        coinCount -= upgrade1Cost;
        clickValue += 2; // Increase click value
        upgrade1Cost *= 2; // Increase upgrade cost for next purchase
        upgrade1Button.textContent = `Upgrade 1 (Cost: ${upgrade1Cost} coins)`; // Update button text
        updateDisplay();
    }
});

// Function to buy upgrade 2
upgrade2Button.addEventListener('click', () => {
    if (coinCount >= upgrade2Cost) {
        coinCount -= upgrade2Cost;
        clickValue += 5; // Increase click value
        upgrade2Cost *= 2; // Increase upgrade cost for next purchase
        upgrade2Button.textContent = `Upgrade 2 (Cost: ${upgrade2Cost} coins)`; // Update button text
        updateDisplay();
    }
});
