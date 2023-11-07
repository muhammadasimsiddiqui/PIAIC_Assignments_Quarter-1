console// Define the person's name
const personName: string = "John Doe";

// Print the name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the name in title case
const titleCaseName = personName
  .toLowerCase()
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log("Title case:", titleCaseName);
