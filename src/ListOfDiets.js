import React from "react";
import Header from "./Header";
import TokenService from "./services/token-service.js";
import config from "./config";
import { NavLink } from 'react-router-dom';


class ListOfDiets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dietsByUserId: [],
            diets: [],
            recipesByUserId:[]
        };
    }

    componentDidMount() {
        this.showUsersRecipesByDiet()
        //let currentUser = TokenService.getUserId();
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
        console.log("Stateful component 1 Dashboard successfully mounted.");
    }
    
    showUsersRecipesByDiet() {
        //let currentUser = TokenService.getUserId();
        let currentUser = 1;

        let getRecipesByUserId = `${config.API_ENDPOINT}/recipes/recipes-by-user-id/${currentUser}`;

        fetch(getRecipesByUserId)
            .then((recipesInList) => recipesInList.json())
            .then((recipesInList) => {
                this.setState({
                    recipesByUserId: recipesInList,
                });
                
            })

            .catch((error) => this.setState({ error }));
        console.log("Stateful component 2 Dashboard successfully mounted.");
    }

    //     // handleSubmit(event) {
    //     //   console.log('Your diet is: ' + this.state.diets);
    //     //   event.preventDefault();
    //     // }

    deleteDiet(event) {
        event.preventDefault();

        const data = {};

        const formData = new FormData(event.target);

        for (let value of formData) {
            data[value[0]] = value[1];
        }

        console.log(data);

        let { dietId } = data;
        console.log(dietId);


        fetch(`${config.API_ENDPOINT}/diets/diet/${dietId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => {
            window.location = `/diet/show/${dietId}`;
        });
    }

    render() {
        // let existingRecipes = this.showUsersRecipesByDiet('keto')
        // console.log(existingRecipes)
        let existingRecipes = this.state.recipesByUserId.map(recipe => {
                return(
                    <li>
                        {recipe.diet_name}
                    </li>
                )
        })
        let diet = "diet text";
        let dietInfo = "diet info text";
        const existingDiets = this.state.dietsByUserId.map((diet, key) => {
                return ( <ul>
                        <li>
                            {(diet.diet_name == "gluten") ?  
                            <h3 className = 'selectedDiet' > Gluten Free</h3>
                            : 
                            <h3> Gluten Free</h3>
                            }

                            <p>
                                Eliminating gluten means avoiding wheat, barley,
                                rye, and other gluten-containing grains and
                                foods made from them (or that may have been
                                cross contaminated).
                            </p>
                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/gluten">Show recipes</NavLink>
                            </form>
                        </li>
                        <li>
                        {(diet.diet_name == "keto") ?  
                            <h3 className = 'selectedDiet' > Ketogenic (0)</h3>
                            : 
                            <h3> Ketogenic </h3>
                            }

                            <p>
                                The keto diet is based more on the ratio of fat,
                                protein, and carbs in the diet rather than
                                specific ingredients. Generally speaking, high
                                fat, protein-rich foods are acceptable and high
                                carbohydrate foods are not.
                            </p>

                            {(diet.diet_name == "keto") ?  
                                <ul>{existingRecipes}</ul>
                                :
                                <div> </div>
                            }

                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete Diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/keto">Show recipes</NavLink>
                            </form>
                        </li>
                        <li>
                        {(diet.diet_name == "vegetarian") ?  
                            <h3 className = 'selectedDiet' > Vegetarian</h3>
                            : 
                            <h3> Vegetarian</h3>
                            }
                            <p>
                                No ingredients may contain meat or meat
                                by-products, such as bones or gelatin.
                            </p>
                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete Diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/vegetarian">Show recipes</NavLink>
                            </form>
                        </li>
                        <li>
                        {(diet.diet_name == "lacto-vegetarian") ?  
                            <h3 className = 'selectedDiet' > Lacto-Vegetarian</h3>
                            : 
                            <h3> Lacto-Vegetarian</h3>
                            }
                            
                            <p>
                                All ingredients must be vegetarian and none of
                                the ingredients can be or contain egg.
                            </p>
                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete Diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/lacto-vegetarian">Show recipes</NavLink>
                            </form>
                        </li>
                        <li>
                            {(diet.diet_name == "ovo-vegetarian") ?  
                            <h3 className = 'selectedDiet' > Ovo-Vegetarian</h3>
                            : 
                            <h3> Ovo-Vegetarian</h3>
                            }

                            <p>
                                All ingredients must be vegetarian and none of
                                the ingredients can be or contain dairy.
                            </p>
                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete Diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/ovo-vegetarian">Show recipes</NavLink>
                            </form>
                        </li>
                        <li>

                            {(diet.diet_name == "vegan") ?  
                            <h3 className = 'selectedDiet' > Vegan</h3>
                            : 
                            <h3> Vegan</h3>
                            }
                            <p>
                                No ingredients may contain meat or meat
                                by-products, such as bones or gelatin, nor may
                                they contain eggs, dairy, or honey.
                            </p>
                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete Diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/vegan">Show recipes</NavLink>
                            </form>
                        </li>
                        <li>
    
                            {(diet.diet_name == "pescatarian") ?  
                            <h3 className = 'selectedDiet' > Pescetarian</h3>
                            : 
                            <h3> Pescatarian</h3>
                            }

                            <p>
                                Everything is allowed except meat and meat
                                by-products - some pescetarians eat eggs and
                                dairy, some do not.
                            </p>
                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete Diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/ovo-pescetarian">Show recipes</NavLink>
                            </form>
                        </li>
                        <li>

                            {(diet.diet_name == "paleo") ?  
                            <h3 className = 'selectedDiet' > Paleo</h3>
                            : 
                            <h3> Paleo</h3>
                            }
                            <p>
                                Allowed ingredients include meat (especially
                                grass fed), fish, eggs, vegetables, some oils
                                (e.g. coconut and olive oil), and in smaller
                                quantities, fruit, nuts, and sweet potatoes. We
                                also allow honey and maple syrup (popular in
                                Paleo desserts, but strict Paleo followers may
                                disagree). Ingredients not allowed include
                                legumes (e.g. beans and lentils), grains, dairy,
                                refined sugar, and processed foods.
                            </p>
                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete Diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/paleo">Show recipes</NavLink>
                            </form>
                        </li>
                        <li>

                            {(diet.diet_name == "primal") ?  
                            <h3 className = 'selectedDiet' > Primal</h3>
                            : 
                            <h3> Primal</h3>
                            }
                            <p>
                                Very similar to Paleo, except dairy is allowed -
                                think raw and full fat milk, butter, ghee, etc.
                            </p>
                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete Diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/primal">Show recipes</NavLink>
                            </form>
                        </li>
                        <li>
                            {(diet.diet_name == "whole30") ?  
                            <h3 className = 'selectedDiet' > Whole30</h3>
                            : 
                            <h3> Whole30</h3>
                            }
                            <p>
                                Allowed ingredients include meat, fish/seafood,
                                eggs, vegetables, fresh fruit, coconut oil,
                                olive oil, small amounts of dried fruit and
                                nuts/seeds. Ingredients not allowed include
                                added sweeteners (natural and artificial, except
                                small amounts of fruit juice), dairy (except
                                clarified butter or ghee), alcohol, grains,
                                legumes (except green beans, sugar snap peas,
                                and snow peas), and food additives, such as
                                carrageenan, MSG, and sulfites.
                            </p>
                            <form
                                className="dietForm"
                                onSubmit={this.deleteDiet}
                            >
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={diet.id}
                                ></input>
                                <input
                                    type="hidden"
                                    name="dietId"
                                    defaultValue={dietInfo.dietListId}
                                ></input>
                                <button type="submit" className="dietDeleteBtn">
                                    Delete Diet
                                </button>
                                <NavLink className ='s-button' to="/recipe/add/whole30">Show recipes</NavLink>
                            </form>
                        </li>
                    </ul>
                    )
        })
        // let dietInfo = {
        //   dietId: `${diet.id}`,
        //   dietListId: `${this.props.match.params.dietListId}`
        // }

        return (
            <section id="listOfDiets">
                <div className="listOfDiets">
                    <h3>Choose your diet</h3>
                    <p>
                        Our diet list includes variety of diets and allows to
                        choose tde diet you would like to follow or already
                        following.
                    </p>
                    {existingDiets}
                </div>
            </section>
        );
    }
}

export default ListOfDiets;
