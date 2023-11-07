#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = ()=>{
    return new Promise ((res)=>{
        setTimeout(res, 2000);
    })
}

async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets Start Calculation'); //start
    await sleep (); 
    rainbowTitle.stop ();
    console.log(`
     _____________________
    |  _________________  |
    | |              0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
   `);
}

welcome();

async function askQuestion(){
    inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
};

const answers : {
  numberOne: number,
  numberTwo: number,
  operator: string
} = await inquirer.prompt([
  {
      type: "number",
      name: "numberOne",
      message: "Kindly enter your first no: "
  },
  {
      type: "number",
      name: "numberTwo",
      message: "Kindly enter your second no: "
  },
  {
      type: "list",
      name: "operator",
      choices: ["*", "+", "-", "/"],
      message: "Select Operator: "
  },
]);

const {numberOne, numberTwo, operator} = answers;
if(numberOne && numberTwo && operator) {
  let result: number = 0;
  if(operator === "+"){
      result = numberOne + numberTwo
  } else   if(operator === "-"){
      result = numberOne - numberTwo
  }   if(operator === "/"){
      result = numberOne / numberTwo
  }   if(operator === "*"){
      result = numberOne * numberTwo
  } 

  console.log("Your result is :", result)
} else{
  console.log("Kindly enter valid input")
}