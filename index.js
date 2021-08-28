// let t = 16; // t is a number
// let t = "Teresa" // t is a string
// let t = true // t is a boolean
// let t; // t is a undefined
// let t = null // t is a null
// let t = {} // t is a object
// let t = [] // t is a array

// // numbers

// let num1 = 93;
// let num2 = 93.00;
// let num3 = 977e8; // 977000000
// let num4 = 977e-8; // 0.000000977
// let num5 = 999999999999999999; // 999999999999999999
// let num6 = 9999999999999999999; // 1000000000000000000;

// let num7 = 5 / 0 // Infinity 1.797693134862315E+308
// let num8 = -5 / 0 // -Infinity; -1.797693134862315E+308

// let x = 20 / "fish" // NaN 

// // strings

// let singleQuote = 'I\'m a single quote';
// let doubleQuote = "I'm a double quote";

// // boolean

// let y = 500 > 10; // true

// let z = 4 < 2; // false

// 5 == 5 // true
// 500 = 400 // false

// "1" == 1 // true
// "1" === 1 // false
// let isStudent = true;

// // Arrays

// let arr = ["APPLE", "pear", "orange"];
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [false,true, {number: 1}];

// // Objects
// // name: value pairs
// let obj = {
//     name: "Teresa",
//     age: 23,
//     isStudent: true,
//     "name": "Pedro"
// };

// let name = 'Surf' + 5 + 3;

// // Surf53;

// let number8 = 5 + 3 + "Surf";

// // 8Surf;
let name = 'Daniel'
console.log('Hola, ' + name);
console.log("Hola name");
console.log(`Hola, ${name}`);

let poem = "The wide Ocean";
const author = "Pablo Neruda";

const favesPoemLiteral = `My favorite poem is ${poem} by ${author}`;
const favesPoem = poem + " by " + author;

console.log(favesPoemLiteral);
console.log(favesPoem);

const stringPrimitive = "dog cat fish";


console.log(typeof stringPrimitive);

const stringObject = new String("I'm a string");
console.log(typeof stringObject);


console.log(stringPrimitive[0]); // ["I", "'", "m" , "a"  , "s", tring]
console.log(stringPrimitive.charAt(0));
console.log(stringPrimitive.indexOf('are'));
console.log(stringPrimitive.lastIndexOf('a'));
console.log(stringPrimitive.slice(8, 11));
console.log(stringPrimitive.length);
console.log(stringPrimitive.toUpperCase());
console.log(stringPrimitive.toLowerCase());
console.log(stringPrimitive.split("-", 2))
console.log(stringPrimitive.trim());

const newString = stringPrimitive.replace(/dog/gi, 'Eagle');

console.log(newString)

// implicit conversion
// substraction

console.log("15" - "10" );
// Modulo

console.log("15" % "10");

// concatenation

console.log("15" + "10");
const numberExample= 49;
const stringValue = String(numberExample);
console.log(true)
console.log(numberExample.toString());
console.log(typeof stringValue)
console.log(typeof  numberExample)

const value = false;
console.log(Number(value));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(2000));
console.log(Boolean(" "));
console.log(Boolean("hOLA"));
console.log(Boolean("0"));

var user;
user = "daniel";

var user = 'soto';

let username = "dan";

const sum = () => {
    const sumTotal = 10;
    return sumTotal;
}

const age = 23;
// PascalCase // Components in React // Class Javascript 
const AgeFrom = 23;
// camelCase // Variables / Functions in Javascript
const ageFrom = 22;
// snake_case // Variables / Functions

// kebab-case // Variables / Functions

let x = 100;

const car = {
    price: 15000,
    color: "red"
}

car.color = "blue";

console.log(car);

