/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

import {allGuest, friendNames} from "./ex14.js";
console.log(`Ex 15 : Start Here \n`);
// friendNames.map((friendNames) =>{
// console.log(`"Join me for a delightful dinner, ${friendNames} ! Let's create unforgettable memories together."`)
// })
// Part A
let whoNot=friendNames.pop();
console.log(`\n"Sorry to hear you can't make it, ${whoNot}. We'll miss your presence at the dinner party."\n`)
console.log(friendNames);
//Part B
//adding new name Kamran on the place of zeeshan
friendNames.push(`Zamaan`);
console.log(friendNames);
//Part C
friendNames.map((friendNames: string ) =>{
    console.log(`"New invitation, A delightful dinner, ${friendNames} ! Let's create unforgettable memories together."`)
    })
allGuest.push(`Zamaan`);

export { allGuest,friendNames };