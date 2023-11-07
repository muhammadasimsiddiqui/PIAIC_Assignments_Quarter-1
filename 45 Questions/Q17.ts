/*ex17
    Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Part A
    • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Part B
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
Part C
• Print a message to each of the two people still on your list, letting them know they’re still invited.
Part D
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/


// Part A
import {allGuest, friendNames } from "./ex16.js";
console.log(`\n\nEx 17 : Start Here \n`);
console.log(`The table for big dinner will not arriving that why I apologise for dinner big party\nHere I have space of 2 guest.`);

// Part B

console.log(friendNames);

for (let i=0;i<(friendNames.length);i++)
{ console.log(`We are sorry ${friendNames.pop()},that you would not be attend the party.`);}

console.log(friendNames);
//Part C
let a = friendNames.length;
console.log(friendNames.length);
for (let i=0;i<a;i++)
{console.log(`Who they are still invited for party : ${friendNames[0]}`);
//Part D
friendNames.shift();}
console.log(`Guest List : ${friendNames}`);
export {allGuest,friendNames};