/*Ex35
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. You could print
a sentence such as Any of these animals would make a great pet! */
 let petsAnimal : string [ ] = [ `Goat`, `Sheep`, `Cow` ];
// Part A
for ( let i=0 ; i<petsAnimal.length ; i++ ) {
    console.log(`${petsAnimal[i]}`);
}
// Part B
for ( let i=0 ; i<petsAnimal.length ; i++ ) {
    console.log(`A ${petsAnimal[i]} would make a great pet.`);
}
// Part C
console.log(`These animals would make a great pet!`);
