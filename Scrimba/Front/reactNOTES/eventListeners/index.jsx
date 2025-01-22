/* 
Event listeners on react 
Types of events listener on react (most used):
- onClick
- onMouseOver
- onMouseOut
- onFocus
- onSubmit
- onKeyPress
- onScroll

When we interact with event liostener on react, we use the camelCase version of the event, like onClick, onMouseOver, etc.
data: when we use a event listeners on a form, the link is updated with what we sumbit on the form, and the page refeshes. To prevent this, we use event.preventDefault() on the function that is called when we submit the form.
*/

export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault() //this prevent the page to refresh when we submit the form
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient) //How to add items to an array to display it on console.log
        console.log(ingredients)
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form"> //notice that, the onSumbit is on the form, not in the button.
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

