/*
    Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting
the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

// Declare the variable alien_color and assign a value to it ('green', 'yellow', or 'red').
let alien_color = 'green';
// Part A
// Check the alien's color using an if-else chain.
if (alien_color === 'green') {
    console.log("\nPlayer earned 5 points for shooting the alien!");

} 
// Part B
// the alien’s color isn’t green, print a statement that the player just earned 10 points.

else {
    console.log("Player earned 10 points for shooting the alien!");
}
console.log(`\nThe Game is end\n\n---------\t*************\t--------\n\nNew Game is Starts Here\n`);
// Part C
// Here another version of this program that runs the if block and another that runs the else block.

// Declare the variable alien_color and assign a value to it ('green', 'yellow', or 'red').

alien_color = 'yellow';

// Check the alien's color using an if-else chain.
if (alien_color === 'green') {
    console.log("Player earned 5 points for shooting the alien!");
} else {
    console.log("Player earned 10 points for shooting the alien!");

}