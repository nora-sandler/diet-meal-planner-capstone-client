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
            spoonacular_id:data.spoonacular_id,
            recipe_name: data.recipe_name,
            recipe_img:data.img
          }
        
          console.log(payload)
        
          fetch(`${config.API_ENDPOINT}/recipes/recipe/${data.recipe_name}`, { ////recipes/recipes-by-user-id//recipe-by-diet-api-data/keto
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
    // addRecipeFromApi(e) {
    //     // console.log('hello there')
    //     e.preventDefault();
    //     // if an integer is empty, undefinded or null, default it to 0
    //     function checkInteger(inputInteger) {
    //         let outputValue = inputInteger;
    //         if (inputInteger === "") {
    //             outputValue = 0;
    //         }
    //         if (inputInteger === undefined) {
    //             outputValue = 0;
    //         }
    //         if (inputInteger == null) {
    //             outputValue = 0;
    //         }
    //         return outputValue;
    //     }

    //     // if a string is undefinded or null, default it to "no details"
    //     function checkString(inputString) {
    //         let outputText = inputString;
    //         if (inputString === undefined) {
    //             outputText = "no details";
    //         }
    //         if (inputString == null) {
    //             outputText = "no details";
    //         }
    //         return outputText;
    //     }

    //     // if a URL is undefinded or null, default it to the root url "/"
    //     function checkURL(inputURL) {
    //         let outputURL = inputURL;
    //         if (inputURL === undefined) {
    //             outputURL = "/";
    //         }
    //         if (inputURL == null) {
    //             outputURL = "/";
    //         }
    //         return outputURL;
    //     }

    //     // if a URL is undefinded or null, default it to the root url "/"
    //     function checkEmptyImage(inputURL) {
    //         let outputURL = inputURL;
    //         if (inputURL === undefined) {
    //             outputURL =
    //                 "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png";
    //         }
    //         if (inputURL == null) {
    //             outputURL =
    //                 "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png";
    //         }
    //         return outputURL;
    //     }

    //     //create an object to store the search filters
    //     const data = {};

    //     //get all the form data from the form component
    //     const formData = new FormData(e.target);

    //     console.log(formData);
    //     //for each of the keys in form data populate it with form value
    //     for (let value of formData) {
    //         data[value[0]] = value[1];
    //     }

    //     //assigning the object from the form data to params in the state
    //     this.setState({
    //         params: data
    //     })

    //     //check if the state is populated with the search params data
    //     console.log(data);

    //     let payload = {
    //         user_id: data.user_id,
    //         spoonacular_id: 0,
    //         name : checkString(data.name),
    //         img: checkString(data.img),
    //     };

    //     console.log(payload);

    //     fetch(`${config.API_ENDPOINT}/recipes/collection/${data.collection_id}`, {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(payload),
    //     })
    //         .then((response) => {
    //             // console.log("response", response)
    //             window.location = `/recipe/add/${data.collection_id}`;
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

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
