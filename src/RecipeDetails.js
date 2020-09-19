import React from "react";
import Header from "./Header";
import config from "./config";

class RecipeDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: [],
        };
    }
    componentDidMount() {
        const recipeId = this.props.match.params.recipeId;

        let getByRecipeId = `${config.API_ENDPOINT}/diets/recipe/${recipeId}`;

        fetch(getByRecipeId)
            .then((response) => response.json())
            .then((data) => {
                console.log("success:", data);
                this.setState({
                    recipe: data,
                    recipeListId: data[0].collection_id,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    addRecipeComment(event) {
        event.preventDefault();
        console.log("Submit clicked");
        const data = {};

        //get all the from data from the form component
        const formData = new FormData(event.target);

        // console.log(formData)
        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1];
        }

        //assigning the object from the form data to params in the state
        // this.setState({
        //     params: data
        // })

        //check if the state is populated with the search params data
        console.log(data);
        let payload = {
            recipe_id: data.recipeId,
        };

        fetch(`${config.API_ENDPOINT}/recipe/${data.recipeId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                // console.log(response)
                // console.log(this.state)
                window.location = `/recipelist/show/${data.collectionId}`;
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="RecipeDetails">
                <Header />
                <section id="recipesDetailsPage">
                    <div className="recipesDetails">
                        <h2>Meal name</h2>
                        <h3>Ingredients</h3>
                        <div className="ingredients">
                            <ul>
                                <li>Pumpkin</li>
                                <li>Heavy cream</li>
                                <li>Onions</li>
                            </ul>
                            <select name="weekdays" id="weekdays">
                                <option defaultValue="Monday">Monday</option>
                                <option defaultValue="Tuesday">Tuesday</option>
                                <option defaultValue="Wed">Wednesday</option>
                                <option defaultValue="tdur">Thursday</option>
                                <option defaultValue="Friday">Friday</option>
                                <option defaultValue="Saturday">
                                    Saturday
                                </option>
                                <option defaultValue="Sunday">Sunday</option>
                            </select>
                            <select name="meals" id="meals">
                                <option defaultValue="Breakfast">
                                    Breakfast
                                </option>
                                <option defaultValue="Lunch">Lunch</option>
                                <option defaultValue="Dinner">Dinner</option>
                                <option defaultValue="Snack">Snack</option>
                            </select>
                            <button type="submit">Add</button>
                        </div>
                        <div className="equipment">
                            <p>Equipment</p>
                            <ul>
                                <li>Spoon</li>
                                <li>Knife</li>
                                <li>Fork</li>
                            </ul>
                        </div>
                        <div className="direction">
                            <h2>Direction:</h2>
                            <p>Direction goes here.</p>
                            <ul>
                                <li>Step 1</li>
                                <li>Step 2</li>
                                <li>Step 3</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default RecipeDetails;
