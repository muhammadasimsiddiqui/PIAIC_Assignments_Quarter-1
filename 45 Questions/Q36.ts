/*ex36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be 
printed on the shirt. The function should print a sentence summarizing the size of the shirt and 
the message printed on it. Call the function.*/
//Part A

function make_shirt(size : string, text_Massage : string ){
    console.log(`The Shirt Size is ${size}, Text printed on it is : ${text_Massage}`);
}
make_shirt("large","I Love My MOM");
make_shirt("Medium","I love Lubna");
make_shirt("small","Notty U");

export{}