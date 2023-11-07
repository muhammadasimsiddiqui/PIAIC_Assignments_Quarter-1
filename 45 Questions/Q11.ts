/*ex11
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.*/
let friendNames : string[] = [`Kamran`,`Farhan`,`Adnan`,`Salman`,`Zeeshan`];
console.log(friendNames);
friendNames.map((friendNames)=>{
    console.log(`By .map() ${friendNames}`);
})
friendNames.forEach((friendNames)=>{
    console.log(`By .forEach() ${friendNames}`);
})

