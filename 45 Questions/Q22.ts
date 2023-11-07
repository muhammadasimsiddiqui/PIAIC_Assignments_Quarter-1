let myArray: number[] = [1, 2, 3, 4, 5];

// Attempt to access an index that doesn't exist (index 10)
let element = myArray[10]; // This will cause an error this is not define

console.log(element); // This line won't be executed due to the error

// Corrected version: Access a valid index (e.g., index 2)
let correctedElement = myArray[2];
console.log(correctedElement); // Output: 3


// 