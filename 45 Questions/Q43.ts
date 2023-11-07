/*ex43
Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array
and store it in a separate array. Call show_magicians() with each array to show
that you have one array of the original names and one array with the Great added 
to each magician’s name.


*/
// Define a function to make the magicians great
// import{show_magicians}
function make_great(magicianNames: string[]): string[] {
    // Create a copy of the original array
    const modifiedMagicians: string[] = magicianNames;
    console.log(modifiedMagicians)
    // console.log(magicianNames)

    // Iterate through the copy and add "the Great" to each magician's name
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "the Great " + modifiedMagicians[i];
    }

    // Return the modified array
    return modifiedMagicians;
}

// Define a function to display the magicians
function show_magicians(magicianNames: string[]): void {
    // Iterate through the array and print each magician's name
    magicianNames.forEach((name: string) => {
        console.log(name);
    });
}

// Original array of magician's names
const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great() function with a copy of the original array
const greatMagicians: string[] = make_great([...magicians]);

// Call the show_magicians() function with the original array
console.log("Original Magicians:");
show_magicians(magicians);

// Call the show_magicians() function with the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);