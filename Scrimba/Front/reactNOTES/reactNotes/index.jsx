/*  

First of all u need to install node.js and npm (node package manager)

You also need Vite, a build tool that aims to provide a faster and leaner development experience for modern web projects. 
Forget about opening a html file with liveserver o something like that, u need to run the command in the terminal to see the changes in the browser with react.

What is react? 
FAQ: https://www.reactjs.wiki/ (its also useful for  learning react)

"A library for building user interfaces"

that's correct, but it can be applyed to: 
- Web apps
- Mobile apps
- It's ready to build user interfaces despite the platform. Microsoft is using it to build Windows apps and vr apps .

It's devided in two parts:
- React: the library
- React DOM: the part that interacts with the DOM 

Its universal, its used on client side and server side.
You create componentes that u can reuse to save time.

To start a react project you need to install node.js and npm (node package manager)
in terminal, you need to run:

# Create a new React project using Vite
npm create vite@latest my-react-app -- --template react //this assumes that we will use react, but you can use others

# Navigate to the project directory
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev

LITERALLY, u need the terminal open with npm run dev to see the changes in the browser. Otherwise it will not work.
*/

//first lines of react code
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react'; // for reactEleemnt
 
const App = () => (
  <div>
    <h1>Hello, React</h1>
    <ul>
      <li>Super popular JS library</li>
      <li>Will help me be even more employable</li>
    </ul>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

const reactElement = createElement("h1", null, createElement("span", null, "I'm inside the span")) //this is old react code, we dont use it anymore, but in sumamry, the third parameter is the child, its like (<h1><span></span></h1>) but less useful

function MyAwesomeNavbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid"> //the classes on react are with className 
                <a className="navbar-brand" href="#">MyAwesomeNavbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form role="search">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    )
}

function MyH1Text() { //notice that its MyH1Text, not myH1Text. You need uppercase at the beggining
    return (
        <div>
            <h1> hi</h1> //u cant put things together, like <h1>hi</h1><h1></h1> u cant. Its like createElement()createElement()
            <p>how are u</p>
        </div>
    )
}

root.render(
    <div>
        <MyAwesomeNavbar />
        <MyH1Text />         // you create a funcntion, and u call it here.
    </div>
)

/*
react it's:
Composable:
Can create easly reusable and interchangble  "pieces of web" that can be  combined  in various ways to create complex systems
Declartive:
You describe what you want to happen, and react takes care of the rest. The imperative is do it step by step

React has:
props: properties that are passed to a component. This makes that the components  reusable
*/

function App() {
  const firstName = "Joe"
  const lastName = "Schmoe"
  
  return (
    <h1>Hello {firstName} + " " + lastName</h1> // putting variables in the middle of the text with {} you can display varibales
  )
}

// Hard coded data is not very useful. It's text that we cant change. Its not flexible

