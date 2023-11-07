/*Ex 19
    Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/
import {allGuest, friendNames } from "./ex17.js";
console.log(`\n\n`)
console.log(`Ex 19 : Start Here \n`);
allGuest.forEach(value => (console.log(`Mr. ${value} , Invitation for Party, make dinner with 14,August, at 10:00pm `)))