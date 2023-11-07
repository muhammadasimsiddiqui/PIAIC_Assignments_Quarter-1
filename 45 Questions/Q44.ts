/*
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function
call provides, and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.*/

function orderSandwich (...item : string[]) : void {
    if (item.length === 0)
    { 
        console.log(`You ordered an empty sandwich. Please add some ingredients.`)
    } else {
        console.log(`You ordered a sandwich with the following items:`);
        item.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`)            
        });
    }
}
// Call the function three times with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Tikka", "fish", "Mayonnaise");
orderSandwich();