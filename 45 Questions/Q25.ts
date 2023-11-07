/*
Ex25
    Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color
    and assign it a value of 'green', 'yellow', or 'red'.
Part A
• Write an if statement to test whether the alien’s color is green. If it is, print a message
that the player just earned 5 points.
Part B
• Write one version of this program that passes the if test and another that fails.
(The version that fails will have no output.)
*/


// Answer Part A
// Declare the variable alien_color and assign a value to it ('green', 'yellow', or 'red').
let alien_color = 'green';

// Check if the alien's color is green using an if statement.
if (alien_color === 'green') {
    // Print a message indicating the player earned 5 points.
    console.log("Player earned 5 points!");
}

// Answer Part B
// Declare the variable alien_color and assign a value to it ('green', 'yellow', or 'red').
alien_color = 'yellow';
// Check if the alien's color is green using an if statement.
if (alien_color === 'green') {
    // There's no output in this version since the condition is not met.
    // This block will not be executed because alien_color is 'yellow'.
}




export{}