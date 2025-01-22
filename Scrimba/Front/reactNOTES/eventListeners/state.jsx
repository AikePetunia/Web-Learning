
/*
State VS Props


Props:
Props refers to the properties being **passed into a component** in order for it to work correctly,
similar to have a function that receives paramers: "from above". 
Acomponent receiving props is not allowed to modify those props. (Inmutables.)
Example:

function addTwoNumbers(a, b) {
    // DON'T DO THIS
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))

function Navbar(props) {
    // DON'T DO THIS
    props.logoIcon = "some-other-icon.png"
}

<Navbar logoIcon="spatula.png" />

State:
state refers to  values **that are managed by the component**, similar to variables
declared inside a function. Anytime you have changing values that should be 
saved/displayed, you'll want to use state. 

import { useState } from 'react';
//Alternatively:
import React from "react" 

export default function App() {

    const result = React.useState("Hello") 
    console.log(result) //logs and array, ['Hello', ƒ()]
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result[0]}</button> //Item 0 of the array
        </main>
    )
}

User types an input -> Updates the input and sends it to the state -> React re-renders the component with the new state value -> It's displayed to the user


States uses the Array Destructuring syntax, which is a way to unpack values from an array or properties from an object into distinct variables.

Array destructuring

Here’s an example of how an array is destructured into variables:

// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith

*/


//Subtracts or adds 1 to a counter 
import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0) //this is also named as a array held

    /*
    We don't use let or var for this bc you can reasign one of the array values and it gives:
    const [count, setCount] = React.useState(0);
    count = 10; // Error: Assignment to constant variable
    */
    
    function add() {
        setCount(count + 1)
    }


    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

    //Alternatively with a callback function / functional update:

    function add() {
        setCount(prevCount=> prevCount + 1) //this is a functional update, you can also pass a function
    }
    
    function subtract() {
        setCount(count - 1)
    }    
    
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease cou nt">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}


/*
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   1. Pass the new version of state that we want to use as the 
      replacement for the old version of state. 
   2. Pass a callback function. Must return what we want the new
      value of state to be. Will receive the old version of state
      as a parameter so we can use it to help determine what we want 
      the new value of state to be.


2. When would you want to pass the first option (from answer
   above) to the state setter function?
   
   Whenever we don't really care about (or need) the old value,
   we simply want to set a new value.


3. When would you want to pass the second option (from answer
   above) to the state setter function?

   Whenever we do care about the previous value in state and need
   it to help us determine what the new value should be.

*/

import React from "react"

//A function that flips true -> false and false -> true.
export default function App() {
    
    const [isGoingOut, setIsGoingOut] = React.useState(false) //declares the state and the function that will change it
    
    function changeMind() { //function that changes the state
        setIsGoingOut(prev => !prev)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
                onClick={changeMind} //Calls the function that changes the state
                className="value"
                aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`} //for screen readers. It will say "Current answer is Yes. Click to change it." or "Current answer is No. Click to change it."
            >{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}

//states on arrays
import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
         /*
            setIngredients it's creating a new array called prevIngredients that receives the original ingredients array and "pushes" the new ingredient to it
            not modifying the original array of ingredients.
        */
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}

// complex state:

import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => {
           return{  //It's because its an object, if it was an array, return goes on [] instead {}
            ...prevContact, // spreads the object
            isFavorite: !prevContact.isFavorite //changes the only value that we want to change
        }
        })

    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

//States mantain their values even after the component is unmounted and remounted

//passing data to components