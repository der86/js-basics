//data types, variables and operators

//data types
/*undifined, null, boolean, string, symbol, number, and object */
 
// 24:03
var myName ="Beau"
myName = 8

let ourName = "freeCodeCamp"

const pi = 3.14  //can never change

//storing values with Assignment Operator

var a; //declearing
var b = 2; //assigning

a = 7;

b = a;

console.log(a)


//Initializing Variables
// w/ Assignment Operator

var a = 9;

//uninitialized Variables

//Initialize these three variables

var a =5;
var b = 10;
var c = "I am a";

//Do not change code below this line

a = a + 1;
b = b + 5;
c = c + "string";



//Case Sensitivity in Variables
//Declaration
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Adding Numbers

var sum = 10 + 10;

//Subtracting Numbers

var difference = 95 - 5;

//Multiplying Numbers

var product = 8 * 10;

//Dividing Numbers

var quotient = 66 / 33;

//Incrementing Numbers

var myVar = 87;

myVar++;

//Decrementing Numbers

var myVar = 11;

myVar--;

//decimal points
var ourDecimal = 5.7;

var myDecimal = 0.009;

//multiply Decimal-Numbers

var product = 2.0 * 2.5;

//Division Decimal

var quotient = 4.4 / 2.0;

//finding remainder
var remainder;
remainder = 11 % 3;


//compound assignment with augmented addition
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

//compound assignment with augmented subtraction
var a = 11;
var b = 9;
var c = 3;


a -= 6;
b -= 15;
c -= 1;

//compound assignment with augmented multiplication
var a = 5;
var b = 12;
var c = 6;

a *= 5;
b *= 3;
c *= 10;

//compound assignment with augmented division
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 27;
c /=11

//declaration string Variables
var firstName = "Alan"
var lastName ="turing"

var myFirstName = "beau";
var myLastName = "carnes"

//Escaping Literal Quotes in Strings
var myStr = "I am a\"double quoted\"string inside\"double quotes"


var allMine = ["john",2];
console.log(allMine)
// VM478:2 (2) ['john', 2]0: "john"1: 2length: 2[[Prototype]]: Array(0)
undefined
var firstName = "derick";
var lastLetterOfFirstName = firstName[firstName.length - 1]
undefined
var firstName = "derick";
var lastLetterOfFirstName = firstName[firstName.length + 1]
undefined
var firstName = "derick"
var firstName = firstName.length[1];
undefined
var firstName = "derick"
var firstName = firstName[1];
undefined
var fName = "derick"
undefined
var fName = "derick"
var ourData = fName[0]
undefined
var fName = ["derick"]
var ourData = fName[0]
undefined
var fName = [derick]
var ourData = fName[0]
// VM1088:1 Uncaught ReferenceError: derick is not defined
//     at <anonymous>:1:14
// (anonymous) @ VM1088:1
var fName = ["derick"]
var ourData = fName[0]
undefined
var ourArray = [50,10,70];
var ourData = ourArray[0];
undefined
var ourArray = [50,10,70];
var ourData = ourArray[0];
console.log(ourData);
// VM1279:3 50
undefined
var fName = ["derick"]
var ourData = fName[0]
console.log(ourData)
// VM1385:3 derick
undefined
var myArray = [18,65,99]
myArray[1] = 45;
console.log(myArray)
// VM1568:3 (3) [18, 45, 99]0: 181: 452: 99length: 3[[Prototype]]: Array(0)$fastPatch: 1at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()length: 1name: "indexOf"arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
//     at Function.invokeGetter (<anonymous>:3:28)]caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
//     at Function.invokeGetter (<anonymous>:3:28)][[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ (...O)push: ƒ (...O)reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ (...O)shift: ƒ (...O)slice: ƒ slice()some: ƒ some()sort: ƒ (...O)splice: ƒ (...O)toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ (...O)values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// undefined
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var myData = myArray [2] [1];
console.log(myData)
// VM1883:3 8


//arrays
var colors = ["red", "green", "blue"];
var carList = ["BMW", "TOYOTA", ]

//nested arrays
var myArray = [["bread",3],["milk",5],["eggs",7]];

//functions
function ourReusableFunction (){
    console.log("learning");
}
ourReusableFunction();

function ourFunctionWithArgs(a, b){
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b){
    console.log(a + b);
}
functionWithArgs(10, 5);

function carList (){
    return ("AUDI");
}
carList();

function myBirthday(){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
}
myBirthday();

function birthdaySong (username, age){
    console.log("Happy birthday to you")
    console.log(`Happy birthday dear ${username}`) //templete literal(``)
    console.log("Happy birthday to you")
    console.log(`How old are you now ${age}`)
}
birthdaySong("Derick", 23)

//global scope and functions

