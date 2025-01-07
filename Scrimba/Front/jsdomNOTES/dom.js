
/*
DOM: Document Object Model. 
is a interface that allows us to interact with the HTML and CSS of a website.
You need to have a html file with a least, classes, id, tags, etc. to "point them" with the DOM.
Its made with javascript, js is the language that the browser understand.
You can name 'app.js' or 'main.js' to the file that you will use to interact with the DOM.
*/

document.getElementById('myId');
document.getElementsByClassName('myClass');
document.getElementsByTagName('div');
document.querySelector('#myId');
document.querySelectorAll('.myClass');
document.querySelectorAll('div');
document.querySelector('div');
document.querySelector('div.myClass'); 

document.getElementByClass('').innerText = 'Hello World'; // with .innerText = '' you can change the text of a element.
 
// Variables

let myLet = document.getElementById('myId'); // let is a variable that can be changed.
const myConst = document.getElementByClass('myClass'); // const is a variable that can't be changed.
var myVar = document.querySelector('div'); // var is a variable that can be changed. 
/*
Best Practice
Use let for variables that need to be reassigned
Avoid var in modern JavaScript
Use const by default unless reassignment is needed
*/

console.log(myLet); // console.log() is a function that will print the value of the variable in the console of the browser.
console.log("Hello World"); // console.log() can also print strings;

// Basic operations. Arithmetic operators.
let x = 5;
let y = 2;
let z = x + y; // Addition
let a = x - y; // Subtraction 
let b = x * y; // Multiplication
let c = x / y; // Division 
let d = x % y; // Modulus (Rest of the division)
let e = x ** y; // Exponentiation
console.log(z, a, b, c, d, e);

// Function, what is inside the {} will be executed when the function is called.
// What is inside the () is the parameters that the function will receive. 
function myFunction() { 
    let x = 5;
    let y = 2;
    let z = x + y; // This variables cant be accessed outside the function.
    console.log(z); 
}

// Functions are made to write less code and to make the code more organized. 
// You can call the function as many times as you want. It will execute the code inside the {}.

