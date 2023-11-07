/* Ex29
    Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
    if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
// Define an array of favorite fruits
const favorite_fruits: string[] = ["banana", "strawberry", "mango"];

// Check for certain fruits using independent if statements
//  with indexOf method find the requir value it will return array index number if it will not find then we it will return -1
// here we are using not equal to -1, represent by !== -1 
if (favorite_fruits.indexOf("banana") !== -1) {     // fuits.indexOf("banana")  is  0 and not equal to -1 conditon is ture
    console.log("You really like bananas!");        // result is   You really like bananas!
}   else {
    console.log(`Not find`);
}

if (favorite_fruits.indexOf("apple") !== -1) {      // fuits.indexOf("apple")  is not find it will return -1 condition will false
    console.log("You really like apples!");
}  else {
    console.log(`Not find`);                        // result is   Not find
}

if (favorite_fruits.indexOf("strawberry") !== -1) {   // fuits.indexOf("strawberry")  is  0 and not equal to -1 conditon is ture
    console.log("You really like strawberries!");     // result is   You really like strawberry!      
}  else {                           
    console.log(`Not find`);                        
}

if (favorite_fruits.indexOf("kiwi") !== -1) {       // fuits.indexOf("kiwi")  is not find it will return -1 condition will false
    console.log("You really like kiwis!");
}  else {
    console.log(`Not find`);
}

if (favorite_fruits.indexOf("mango") !== -1) {      // fuits.indexOf("mango")  is  0 and not equal to -1 conditon is ture    
    console.log("You really like mangoes!");        // result is   You really like mangos!
}                                                       