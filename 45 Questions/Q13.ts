/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
let favmotor : string[] = [`HONDA 125`, `YAMAHA 100`,`BMW MOTORRAD`,`UNIQUE 150`];
favmotor.map((favmotor)=>{
console.log(`“I would like to own a ${favmotor} motorcycle.”`)
})