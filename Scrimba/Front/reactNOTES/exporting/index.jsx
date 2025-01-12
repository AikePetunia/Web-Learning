import { createRoot } from "react-dom/client"
import Header from "./Header.jsx"
const root = createRoot(document.getElementById("root"))

function MainContent() {
    return (
        <main>
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)


// We dont want any hard coded in react, we want to export and import our components.



// (on other file) See that here we are passing data
import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App

// (on other file) here, the component is reciving data

export default function Contact(props) {
    const img = props.img 
    const image = props.image
    const name = props.name
    const phone = props.phone
    const email = props.email
    return (
        <article className="contact-card">
            <img
                src={image || img} //If the image is not passed, it will use the default image 
                                    // You can do the same with {props.setup && <p className="setup">Setup: {props.setup}</p>}
            />
            <h3> {name} </h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}

/*
Very amazing, for each prop that we are passing, it generates a new article without problems and without repeating code.
*/

/*
Quiz:
1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!

*/


export default function Contact({img, name, phone, email}) {
    return (
        <article className="contact-card">
            <img
                src={img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

const {img, name} = person
console.log(img)

//this codes desconstruts the object, and gets the img and name from the object person. It's the same as:
// const img = person.img
// const name = person.name
// but u are saving time and effort

// There is no real difference between the two, but the second one is more readable (Deconstructing) and easier to understand insted of delcaring variables one by one.

//How to pass different types of data:

<Joke
    punchline="It's hard to explain puns to kleptomaniacs because they always take things literally." //how to pass a string
    upvotes={10} // How to pass a number
    isPun={true} // How to pass a bool
    comments={[
        {author: "", text: "", title: ""}, //how to pass an array 
        {author: "", text: "", title: ""}
    ]}
    img={{ 
        src: "https://scrimba.com/links/travel-journal-japan-image-url",
        alt: "Mount Fuji" 
    }} //object
/> 


/*
For relative paths on locla machine:
The best practice is to import it and save it to a variable, like:
import imgUrl from './img.png'
document.getElementById('hero-img').src = imgUrl

Vite can broke the relative paths
*/


import Contact from "./Contact"
import mrWhiskerson from "./images/mr-whiskerson.png" // like this


function App() {
    return (
        <div className="contacts">
            <Contact
                img={mrWhiskerson}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
    )}


//an example


//on app.jsx
import Header from "./components/Header"
import Entry from "./components/Entry"
import props from "./data.md"

export default function App({img, title, country, googleMapsLink, dates, text}) {
    return (
        <>
            <Header />
            <main className="container">
                <Entry 
                img={{ 
                        src: "https://scrimba.com/links/travel-journal-japan-image-url",
                        alt: "Mount Fuji" 
                }}
                title="Mount Fuji"
                country="Japan"
                googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                dates="12 Jan, 2021 - 24 Jan, 2021"
                text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            
                />
            </main>
        </>
    )
}

// On Entry.jsx
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src= {props.img.src} //bc it's an object
                    alt={props.img.alt} 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.title}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">Mount Fuji</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            
        </article>
    )
}