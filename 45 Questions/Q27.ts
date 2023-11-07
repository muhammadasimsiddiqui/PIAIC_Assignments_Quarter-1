/*Ex27
    Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

a)• If the alien is green, print a message that the player earned 5 points.

b)• If the alien is yellow, print a message that the player earned 10 points.

c)• If the alien is red, print a message that the player earned 15 points.

d)• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
//Version A
console.log(`Version A`);
let alien_color: string= `green`;
// Part A
if (alien_color === `green`){
    console.log(`The player earned 5 points`);
// Part B    
}   else {
    if  (alien_color === `yellow`){
        console.log(`The player earned 10 points`);
// Part C        
    }   else{
        if  (alien_color === `red`){
            console.log(`The player earned 15 points`);
        }   
    }
}
console.log(`\nVersion B`);
//Version B

alien_color = `yellow`;
// Part A
if (alien_color === `green`){
    console.log(`The player earned 5 points`);
// Part B    
}   else {
    if  (alien_color === `yellow`){
        console.log(`The player earned 10 points`);
// Part C        
    }   else{
        if  (alien_color === `red`){
            console.log(`The player earned 15 points`);
        }   
    }
}
console.log(`\nVersion C`);
//Version C
alien_color = `red`;
// Part A
if (alien_color === `green`){
    console.log(`The player earned 5 points`);
// Part B    
}   else {
    if  (alien_color === `yellow`){
        console.log(`The player earned 10 points`);
// Part C        
    }   else{
        if  (alien_color === `red`){
            console.log(`The player earned 15 points`);
        }   
    }
}
