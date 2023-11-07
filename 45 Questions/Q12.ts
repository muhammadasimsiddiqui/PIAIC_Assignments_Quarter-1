/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.*/
let friendNames : string[] = [`Kamran`,`Farhan`,`Adnan`,`Salman`,`Zeeshan`];
friendNames.map((friendNames)=>{
    console.log(`"Hey ${friendNames}! Sending you warm wishes and a big smile `);
})
export{}