"use strict";
// Greeting 1
// const result = greeting("Klaus");

// function greeting (firstName){
//    return `Hello ${firstName}`
    
// }
// console.log(result);

// Greeting 2

// function greeting(firstName){
//     return `Hello ${firstName}`;
// }

// greeting("any name");
// console.log(greeting("any name"));
// const txt = `Greeting is ${greeting("a name")}`;
// console.log(txt)

// Array 

// let letters = ['a','b','c','d','e','f','g','h'];
// console.log(letters[4]);

// let newarr = letters; 
// newarr[4] = '*';
// console.log(letters[4]);

// Array Methods

// const people = ["Harry", "Ron", "Hermione"];
// let result;
// result = people.push("Draco");

// result = people.pop();
// result = people.push("Neville");
// result = people.push("Luna");
// result = people.slice(0,3);
// result = people.splice(1,0,"Cho");
// people[1] = "Ginny";
// result = people.push("Fred", "George");
// result = people.indexOf("Fred");
// result = people.splice(result,1);
// result = people.shift();
// result = people.unshift("Tina");

// console.log(result);
// console.log(people);

// string - hvordan man laver en string om til et array 

// const letters = Array.from("abcdefgh");
// console.log(letters);

// const str = "abcdefghijklmn";
// console.log("split", str.split("")); 
// split kan splitte på mellemrum
// console.log("from", Array.from(str));
// console.log("spread", [...str]);

// Functions

// function greeting(firstName){
//     return `Hello ${firstName}`;
// }
// const sayHi = greeting;
// console.log(sayHi ("Mona"));

// Callback function

// function congreet(firstName){
//     console.log(`Hello ${firstName}`);
// }
// setTimeout(congreet, 1000, "Ron");

// Calling functions (send en funktion med som referrence)

// const person3 ={
//     firstName: "Harry",
//     lastName: "Potter",
//     hired: false,
// }
// const person4 ={
//     firstName: "Fred",
//     lastName: "Weassley",
//     hired: false,
// }

// function hire(person){
//     person.hired = true;
// }
// function fire(person){
//     person.hired = frue;
// }

// hire (person3);
// console.log(person3);

// function fireOrHire(action,person){
//     action(person);
// }
// fireOrHire (hire, person3);
// console.log(person3);