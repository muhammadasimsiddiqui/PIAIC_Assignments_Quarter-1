/*  Ex18
    Seeing the World: Think of at least five places in the world you’d like to visit.

•a) Store the locations in a array. Make sure the array is not in alphabetical order.

•b) Print your array in its original order.

•c) Print your array in alphabetical order without modifying the actual list.

•d) Show that your array is still in its original order by printing it.

•e) Print your array in reverse alphabetical order without changing the order of the original list.

•f) Show that your array is still in its original order by printing it again.

•g) Reverse the order of your list. Print the array to show that its order has changed.

•i) Reverse the order of your list again. Print the list to show it’s back to its original order.

•j) Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

•k) Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

//Part a
let favConutry =["Turkey", "Saudia Arab","Iraq", "Iran","Afganistan"];
//Part b
console.log(favConutry);
// Part c & d
console.log(`Sort assending order array alphabetically  : ${favConutry.sort()}`);
// Part e & f
console.log(`Sort array in desending order              : ${favConutry.sort().reverse()}`);
// Part g
console.log(`reverse order                              : ${favConutry.reverse()}`);
//Part i
console.log(`Back to Original order                     : ${favConutry.reverse()}`);
//Part j
console.log(`Sort assending order array alphabetically  : ${favConutry.sort()}`);
// Part k
let reversFavVountry =favConutry;
reversFavVountry.reverse();
if (reversFavVountry===favConutry){
    console.log(`\nThe order has been changed `);
    console.log(reversFavVountry);
}