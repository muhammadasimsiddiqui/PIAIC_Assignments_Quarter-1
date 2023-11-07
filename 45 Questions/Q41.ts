/*ex41
Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.
*/

import exp from "constants";

// Define an array of magician's names
const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Define a function called show_magicians() that takes an array of names as a parameter
function show_magicians(magicianNames: string[]) {
    // Iterate through the array and print each magician's name
    magicianNames.forEach((name: string) => {
        console.log(name);
    });
}
// Call the show_magicians() function with the magicians array
show_magicians(magicians);
export{show_magicians}