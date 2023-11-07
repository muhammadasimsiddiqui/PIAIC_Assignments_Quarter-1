/*ex37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
 message that reads I love TypeScript. Make a large shirt and a medium shirt with
 the default message, and a shirt of any size with a different message.*/
 
import inquirer from "inquirer";

console.log(`Please Select Size (small, medium, large) and \nTell us what should print on it you can give massage.`);

 const size = await inquirer.prompt({
    message : "Please Enter a Size",
    type : "input",
    name : "size"    
 })


// const size : string = "medium";
function make_shirt(size : string, text_Massage : string ){
size = size.toLowerCase();
if (size === "large"){
    console.log(`Sorry in the Shirt Size is ${size}, we have Only text printed on it is : ${text_Massage}`);
} else {

console.log(`The Shirt Size is ${size}, Text printed on it is : ${text_Massage}`);
}
}
make_shirt("\n\nsmall","Lovly girl");
make_shirt("large","Lovly girl");
make_shirt("medium","Noughty girl");
