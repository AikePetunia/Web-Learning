import Joke from "./Joke"
import jokesData from "./jokesData"


/* 
With the map function, we can take an array of data and map it to an array of components.
So we don't render the each <Joke /> component individually, we can use the map function to map over the jokesData array and create a new array of <Joke /> components.
*/
export default function App() {
    
    const jokeElements = jokesData.map((joke) => { // recorre el arreglo pasando datos.
        return <Joke  
        setup={joke.setup} 
        punchline={joke.punchline}/>
    })
    return (
        <main>
            {jokeElements} 
        </main>
    )
}

/* Notes about .map() method:
1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Critical thinking: why is using `.map()` better than just
   creating the components manually by typing them out?
    1. We often don't have the data ahead of time when we're building
       the app, so we simply can't manually type them out.
    2. It makes our code more "self-sustaining" - not requiring additional
       changes to the code whenever the data changes.


*/
