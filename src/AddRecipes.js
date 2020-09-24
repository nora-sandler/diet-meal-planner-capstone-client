import React from "react";
import Header from "./Header";
import TokenService from "./services/token-service.js";
import config from "./config";

class AddRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipesFound: [],
            params: {},

        };
    }

    componentDidMount() {
        const dietName = this.props.match.params.dietName;
        let url = `${config.API_ENDPOINT}/recipe-by-diet-api-data/${dietName}`;
        console.log(url)

        fetch(url)
            .then((response) => response.json())

            .then((data) => {
                console.log(data)
                this.setState({
                    recipesFound: data.results
                });
                console.log(this.state)
            })

            .catch((err) => {
                console.log(err);
            });

        console.log("Stateful component add recipe successfully mounted.");
    }


    
    addRecipe(event) {
        
        console.log('hello there')

        event.preventDefault()
    

        const data = {}
    
        const formData = new FormData(event.target)
    
        for (let value of formData) {
            data[value[0]] = value[1]
        }
    
        console.log("data")
 
        let {spoonacular_id, recipe_name, recipe_img} = data;
        console.log(spoonacular_id, recipe_name, recipe_img)
        let payload = {
            user_id: data.user_id,
            spoonacular_id:data.spoonacular_id,
            recipe_name: data.recipe_name,
            recipe_img:data.img
          }
        
          console.log(payload)
        
          fetch(`${config.API_ENDPOINT}/recipes`, {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(payload),
            })
        
            .then(response => {
              console.log("response", response)
            //   window.location = `/book/add/${data.collection_id}` 
            })
            .catch(err => {
              console.log(err);
            });
    
      }

    render() {
        let foundRecipes = this.state.recipesFound.map(recipe => {
            let imgUrl = `https://spoonacular.com/recipeImages/${recipe.image}`
            return (
                <li key={recipe.id}>
                    <a href={recipe.sourceUrl} target='_blank'>
                        <h3>
                            {recipe.title}
                        </h3>
                        <p>
                            Cooking time: {recipe.readyInMinutes}
                        </p>
                        <p>
                            Servings: {recipe.servings}
                        </p>

                        <img
                            className='recipeImage'
                            src={imgUrl}
                            alt="img"
                        />
                    </a>
                    <form className="addRecipeForm" onSubmit={this.addRecipe}>
                        <input type='hidden' name='spoonacular_id' defaultValue={recipe.id}></input>
                        <input type='hidden' name='recipe_name' defaultValue={recipe.title}></input>
                        <input type='hidden' name='recipe_img' defaultValue={recipe.image}></input>
                        <button type='submit' className='addRecipeBtn'>Add recipe</button>
                    </form>

                </li>

            )
        })
        return (
            <div className="AddRecipes">
                <Header />
                <section id="AddRecipesPage">
                    <div className="listOfMeals">
                        <h2>Choose your meal</h2>
                        <p>
                            Discover variety of delicious recipes to cook and
                            enjoy!
                        </p>
                        <h2>List of recipes</h2>
                        <ul>
                            {foundRecipes}
                        </ul>
                        <button type="submit">Next</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default AddRecipes;
