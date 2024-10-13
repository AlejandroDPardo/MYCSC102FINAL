// game.js
// Function to play background music
function playMusic() {
    const music = document.getElementById('gameMusic'); // Get the audio element
    music.play(); // Play the music
}

function playGame() { // Function to simulate rolling two dice
    playMusic(); // Play music when the game is played

    // Generate a random number between 1 and 6 for the first die
    let die1 = Math.floor(Math.random() * 6) + 1; 
    // Generate a random number between 1 and 6 for the second die
    let die2 = Math.floor(Math.random() * 6) + 1; 
    // Calculate the sum of the two dice
    let sum = die1 + die2; 
    // Variable to hold the result message
    let resultText = "You rolled: " + die1 + " and " + die2 + ". Sum: " + sum + ". ";

    // Check game rules for win/lose conditions
    if (sum === 7 || sum === 11) { 
        resultText += "You lose!"; 
    } else if (die1 === die2 && die1 % 2 === 0) { 
        resultText += "You won!"; 
    } else { 
        resultText += "You pushed!"; 
    }

    // Display the result in the paragraph with ID 'result'
    document.getElementById("result").innerHTML = resultText; 
}
