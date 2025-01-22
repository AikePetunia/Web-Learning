
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

// Array.prototype.map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// map() is a method that is used on arrays. It will create a new array with the results of calling a provided function on every element in the calling array.
// The function that you pass to map() will be called for each element in the array.
// The return value of the function will be added to the new array.
// The original array will not be modified.

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})

// console.log(squares)

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const upperName = names.map((name) => {
    return name[0].toUpperCase + name.slice[1] // separates the first letter, makes it uppercase, and concatenates it with the rest of the word in lowercase
})


// console.log(capitalized)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const mon = pokemon.map((mon) => {
    return `<p>${mon}</p>` // that returns each element of the list in a paragraph
})


export default function App() {
    /**
     * Challenge: manually turn this string array into an array of
     * JSX elements by surrounding each ninja turtle with an <h2> element
     */

    const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"];
    
    const h2Ninja = ninjaTurtles.map((ninja) => {
        return <h2 key={ninja}>{ninja}</h2>; // Use jsx to create the elements, and use the key to identify each element
    });

    return (
        <main>
            {h2Ninja}
        </main>
    );
}


/*
The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
a condition followed by a question mark (?), then an expression 
to execute if the condition is truthy followed by a colon (:), 
and finally the expression to execute if the condition is falsy. 
This operator is frequently used as an alternative to an if...else statement.


*/

function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"
  
  console.log(getFee(false));
  // Expected output: "$10.00"
  
  console.log(getFee(null));
  // Expected output: "$10.00"
  
// Other (e.g):

    const isGoingOut = true
    
    let answer = isGoingOut === true ? "Yes" : "No"
    
    //ITS THE SAME THING AS:
    if(isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }

/*
La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos 
(para llamadas de función) o elementos (para Array literales) son esperados, 
o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.
*/

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers)); 
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  // Expected output: 6
  