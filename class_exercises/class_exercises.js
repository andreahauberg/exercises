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


// For each

// const people = ["Harry", "Ron", "Hermione", "Neville"];

// function sayHello(person){
//     console.log(`Hello ${person}`);
// }

// people.forEach(sayHello);


// foreach callback med flere parametre

// const people = ["Harry", "Ron", "Hermione", "Neville"];

// function testParms ( a, b, c, d ) {
//     console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
// }

// people.forEach( testParms );

// ****FILTER*****

// const animals = [

// {
//     name: "Mandu",
//     type: "cat"
// },

// {
//     name: "Mia",
//     type: "cat"
// },

// {
//     name: "Lee",
//     type: "dog"
// },

// {
//     name: "DeeDee",
//     type: "dog"
// }

// ];

// function isCat( animal ){
//     if( animal.type === "cat" ){
//         return true;
//     } else {
//         return false;
//     }
// }

// let onlyCats = animals.filter(isCat);
// console.log(onlyCats);



// function isDog( animal ){
//     if( animal.type === "dog" ){
//         return true;
//     } else {
//         return false;
//     }
// }

// let onlyDogs = animals.filter(isDog);
// console.log(onlyDogs);



// function all( animal ){
//     return true;
// }

// function none( animal ){
//     return false;
// }

// console.log(animals.filter( all ));
// console.log(animals.filter( none ));


//*** += *** lægger en bestemt værdi til 

// let str = "hej ";
// str += "du";
// console.log(str);

// let num =2;
//  num += 4;
//  console.log(num);


// *** ++ *** (lægger en til)

//  let i = 0;
//  console.log(i);

//  i++;
//  console.log(i);
