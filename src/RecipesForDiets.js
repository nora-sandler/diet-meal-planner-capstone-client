import React from "react";
import config from "./config";



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
                // console.log(this.state);
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
                // console.log(recipesInList[0].diet_name)
                // let filterRecipesByDietName = recipesInList.map((recipe, key) => {
                //     console.log(recipe.diet_name)
                //     console.log(this.props.dietName)
                //     let output = ''
                //     if (recipe.diet_name == this.props.dietName) {
                //          output = recipe
                //     }
                //     return output
                // })
                let filterRecipesByDietName = recipesInList.filter((recipe) => {

                    return (recipe.diet_name === this.props.dietName) 

            
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
        // console.log(this.state.recipesByUserId.length)
        let showRecipePage = ''
        //by default show there are no recipes 
        if (this.state.recipesByUserId.length === 0) { 
        showRecipePage =
            <div className="RecipesForDiets">
                No recipes here
            </div>
        }
        // if there are recipes fir this diet
        else {

            // display details for each one of the recipes
            let existingRecipes = this.state.recipesByUserId.map((recipe, key) => {
                if (recipe) {
                    return (
                        <li key ={key}> 
                            <p>{recipe.recipe_name} </p>
                        </li>
                    )
                }
            })

            // display recipeDetails to the page
            showRecipePage =
                <div className="RecipesForDiets">
                    <h4>Recipes</h4>
                    {existingRecipes}
                </div>
        }
        return (
            <section id="RecipesForDiets">
                {showRecipePage}
            </section>
        );
    }
}

export default RecipesForDiets;
