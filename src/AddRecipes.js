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

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(
            `https://api.spoonacular.com/recipes/?q=${this.state.recipes}&apiKey=6a8f8872dfcd40a3801e7a331e543a53&diet=keto`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                // let recipesList = data.items.map((data, key) => {
                //         name:,
                //         spoonacular_id :,
                //         img:
                // }

                // this.setState({
                //     recipesFound: recipesList,
                // });
                console.log(this.state)
            })

            .catch((err) => {
                console.log(err);
            });
    };

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
            return(
                <li>
                <a href="#">
                    {recipe.title}
                    <img
                        alt="Recipe1Img"
                        src="img.jpg"
                        alt="alt-image"
                    />
                </a>
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
