/*Ex 32
    Checking Usernames: Do the following to create a program that simulates how websites ensure 
    that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
  also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
  If it has, print a message that the person will need to enter a new username. If a username has not been used,
  print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

// Checking Usernames

// Part 1: Make a list of current users
const current_users: string[] = ['Khizer', 'JOHN', 'shabir', 'Furqan', 'Uhod'];

// Part 2: Make a list of new users
const new_users: string[] = ['Zahid', 'JOHN', 'Kamil', 'Noor', 'Furqan'];
const currentUsers=current_users.map(user=>user.toLowerCase());
const newUsers=new_users.map(user=>user.toLowerCase());
console.log(currentUsers);
console.log(newUsers);
//implicite array
const finalListUseravailable : string[] = [];
// checking current Users to new user and adding in new array;
for ( const user of currentUsers) {
  if (!currentUsers.includes(user)){
    finalListUseravailable.push(user);
  }
} 

for ( const user of newUsers) {
  if (!currentUsers.includes(user)){
    finalListUseravailable.push(user);
  }
} 

for ( const user of newUsers) {
  if (finalListUseravailable.includes(user)){
      console.log(`The username is available : ${user}`);
  } else {
    console.log(`The username is not available : ${user}`);
  }
}



export{}



//This is practics to make function
// const current_users: string[] = ['Khizer', 'JOHN', 'shabir', 'Furqan', 'Uhod'];


// const new_users: string[] = ['Zahid', 'JOHN', 'Kamil', 'Noor', 'Furqan'];


// function checkavailable (current_users:string[],new_users:string[]){
//     const currentUsers=current_users.map(user=>user.toLowerCase());
//     const newUsers=new_users.map(user=>user.toLowerCase());

//     const finalListUseravailable : string [] = [];
//     for ( const user of current_users) {
//         if (!current_users.includes(user)){
//           finalListUseravailable.push(user);
//         }
//       } 
      
//       for ( const user of new_users) {
//         if (!current_users.includes(user)){
//           finalListUseravailable.push(user);
//         }
//       } 
      
//       for ( const user of new_users) {
//         if (finalListUseravailable.includes(user)){
//             console.log(`The username is available : ${user}`);
//         } else {
//           console.log(`The username is not available : ${user}`);
//         }
//       }
// }
// checkavailable(current_users,new_users);
// console.log(`\n\n`)

// //lets check with another list 
// const loginNameNew : string [ ] = [ `Saif`, `Azan`, `Salman`, `Irshad`, `Faheem`, `Sanaullah`, `Sameer`];
// const loginCurrentName : string [ ] = [ `Saif`, `Zuhaib`, `Salman`, `Irshad`, `Adnan`, `Sanaullah`, `burhan`];
// checkavailable(loginCurrentName,loginNameNew);








  