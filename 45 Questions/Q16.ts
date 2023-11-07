/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

// Part A
import {allGuest, friendNames } from "./ex15.js";
console.log(`\n\nEx 16 : Start Here \n`);
console.log(`Some Updates about Party : Now we are arranging a big party.`)
// Part B
friendNames.unshift(`Akbar`);
allGuest.unshift(`Akbar`);
//Part C
friendNames.splice(1,((friendNames.length)/2)+1,"Aziz")
allGuest.splice(1,0,"Aziz")
console.log(friendNames);
//Part D

function append(friendNames: string[], index: number, value: string) {
    friendNames.splice(index, 0, value);
  }
append(friendNames , (friendNames.length) , `Burhan`);
append(allGuest , 0 , `Burhan`);

console.log(friendNames);
//Part E
friendNames.forEach((value) => {
    console.log(`"Join me for a delightful dinner, ${value} ! Let's create unforgettable memories together."`);
});


export{allGuest,friendNames};