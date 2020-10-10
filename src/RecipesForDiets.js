import React from "react";
import Header from "./Header";
import TokenService from "./services/token-service.js";
import config from "./config";
import { NavLink } from 'react-router-dom';


class RecipesForDiets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dietsByUserId: [],
            diets: [],
            recipesByUserId: []
        };
    }

    componentDidMount() {
        console.log(this.props.dietName)
        this.showUsersRecipesByDiet()
        // let currentUser = TokenService.getUserId();
        let currentUser = 1;

        let getDietByUserId = `${config.API_ENDPOINT}/recipes/diets-by-user-id/${currentUser}`;

        fetch(getDietByUserId)
            .then((dietsInList) => dietsInList.json())
            .then((dietsInList) => {
                this.setState({
                    dietsByUserId: dietsInList,
                });
                console.log(this.state);
            })

            .catch((error) => this.setState({ error }));
        // console.log("Stateful component 1 Dashboard successfully mounted.");
    }

    showUsersRecipesByDiet() {
        // let currentUser = TokenService.getUserId();
        let currentUser = 1;

        let getRecipesByUserId = `${config.API_ENDPOINT}/recipes/recipes-by-user-id/${currentUser}`;

        fetch(getRecipesByUserId)
            .then((recipesInList) => recipesInList.json())
            .then((recipesInList) => {
                console.log(recipesInList[0].diet_name)
                let filterRecipesByDietName = recipesInList.map((recipe, key) => {
                    if (recipe.diet_name == this.props.dietName) {
                        return recipe
                    }
                })
                this.setState({
                    recipesByUserId: filterRecipesByDietName,
                });
console.log(this.state)
            })

            .catch((error) => this.setState({ error }));
        // console.log("Stateful component 2 Dashboard successfully mounted.");
    }


    
    render() {

        let existingRecipes = this.state.recipesByUserId.map(recipe => {
            if (recipe) {
                return (
                    <li>
                       <p>{recipe.recipe_name} </p>                      
                    </li>
            )}
        })

        // const existingDiets = this.state.dietsByUserId.map((diet, key) => {
        //     return (<ul key = {key}>
        //         <li>
        //         {diet.diet_name}
        //         </li>
        //        </ul>
            
            
        //     )
        // })

        return (
            <section id="RecipesForDiets">
                <div className="RecipesForDiets">
                    <h3>Recipes</h3>
                    {existingRecipes }
                </div>
            </section>
        );
    }
}

export default RecipesForDiets;
