import React from "react";
import RecipesForDiets from "./RecipesForDiets";
import Header from "./Header";
import TokenService from "./services/token-service.js";
import config from "./config";
import { NavLink } from 'react-router-dom';
import './component.css';


class ListOfDiets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dietsByUserId: [],
            diets: [],
            recipesByUserId: []
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
            return (
                <li>
                    {recipe.diet_name}
                </li>
            )
        })
        let diet = "diet text";
        let dietInfo = "diet info text";
        const existingDiets = this.state.dietsByUserId.map((diet, key) => {
            return (<ul key={key}>
                <li>
                    {(diet.diet_name == "glutenfree") ?
                        <h3 className='selectedDiet' > Gluten Free</h3>
                        :
                        <h3> Gluten Free</h3>
                    }

                    <p>
                        Eliminating gluten meals avoiding wheat, barley,
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
                        <NavLink className='s-button' to="/recipe/add/glutenfree">Show recipes</NavLink>
                    </form>
                    <RecipesForDiets dietName="glutenfree" />
                </li>
                <li>
                    {(diet.diet_name == "vegetarian") ?
                        <h3 className='selectedDiet' > Vegetarian</h3>
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
                            Delete diet
                                </button>
                        <NavLink className='s-button' to="/recipe/add/vegetarian">Show recipes</NavLink>
                    </form>
                    <RecipesForDiets dietName="vegetarian" />
                </li>
                <li>
                    {(diet.diet_name == "lacto ovo vegetarian") ?
                        <h3 className='selectedDiet' > Lacto ovo vegetarian</h3>
                        :
                        <h3> Lacto ovo vegetarian</h3>
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
                            Delete diet
                                </button>
                        <NavLink className='s-button' to="/recipe/add/lacto-ovo-vegetarian">Show recipes</NavLink>
                    </form>
                    <RecipesForDiets dietName="lacto-ovo-vegetarian" />
                </li>
                <li>

                    {(diet.diet_name == "vegan") ?
                        <h3 className='selectedDiet' > Vegan</h3>
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
                            Delete diet
                                </button>
                        <NavLink className='s-button' to="/recipe/add/vegan">Show recipes</NavLink>
                    </form>
                    <RecipesForDiets dietName="vegan" />
                </li>
                <li>

                    {(diet.diet_name == "pescatarian") ?
                        <h3 className='selectedDiet' > Pescatarian</h3>
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
                            Delete diet
                                </button>
                        <NavLink className='s-button' to="/recipe/add/pescatarian">Show recipes</NavLink>
                    </form>
                    <RecipesForDiets dietName="pescatarian" />
                </li>
                <li>

                    {(diet.diet_name == "paleolithic") ?
                        <h3 className='selectedDiet' > Paleolithic</h3>
                        :
                        <h3> Paleolithic</h3>
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
                            Delete diet
                                </button>
                        <NavLink className='s-button' to="/recipe/add/paleolithic">Show recipes</NavLink>
                    </form>
                    <RecipesForDiets dietName="paleolithic" />
                </li>
                <li>

                    {(diet.diet_name == "primal") ?
                        <h3 className='selectedDiet' > Primal</h3>
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
                            Delete diet
                                </button>
                        <NavLink className='s-button' to="/recipe/add/primal">Show recipes</NavLink>
                    </form>
                    <RecipesForDiets dietName="primal" />
                </li>
                <li>

                    {(diet.diet_name == "calorie") ?
                        <h3 className='selectedDiet' > Calorie-based</h3>
                        :
                        <h3> Calorie-based</h3>
                    }

                    <p>
                        #####.
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
                        <NavLink className='s-button' to="/recipe/add/calorie">Show recipes</NavLink>
                    </form>
                    <RecipesForDiets dietName="calorie" />
                </li>
                <li>

                    {(diet.diet_name == "protein") ?
                        <h3 className='selectedDiet' > Protein diet</h3>
                        :
                        <h3> Protein diet</h3>
                    }

                    <p>
                        #####.
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
                        <NavLink className='s-button' to="/recipe/add/protein">Show recipes</NavLink>
                    </form>
                    <RecipesForDiets dietName="protein" />
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
                        choose the diet you would like to follow or already
                        following.
                    </p>
                </div>
                <div>
                    <ul>
                        <li>
                            <h3> Gluten Free</h3>
                            <p>
                                Eliminating gluten meals avoiding wheat, barley,
                                rye, and other gluten-containing grains and
                                foods made from them (or that may have been
                                cross contaminated).
                            </p>
                            <NavLink className='s-button' to="/recipe/add/glutenfree">Show recipes</NavLink>
                            <RecipesForDiets dietName="glutenfree" />
                        </li>
                        <li>
                            <h3> Vegetarian</h3>
                            <p>
                                No ingredients may contain meat or meat
                                by-products, such as bones or gelatin.
                            </p>
                            <NavLink className='s-button' to="/recipe/add/vegetarian">Show recipes</NavLink>
                            <RecipesForDiets dietName="vegetarian" />
                        </li>
                        <li>
                            <h3> Lacto ovo vegetarian</h3>

                            <p>
                                All ingredients must be vegetarian and none of
                                the ingredients can be or contain egg.
                            </p>
                            <NavLink className='s-button' to="/recipe/add/lacto-ovo-vegetarian">Show recipes</NavLink>
                            <RecipesForDiets dietName="lacto-ovo-vegetarian" />
                        </li>
                        <li>

                            <h3> Vegan</h3>
                            <p>
                                No ingredients may contain meat or meat
                                by-products, such as bones or gelatin, nor may
                                they contain eggs, dairy, or honey.
                            </p>
                            <NavLink className='s-button' to="/recipe/add/vegan">Show recipes</NavLink>
                            <RecipesForDiets dietName="vegan" />
                        </li>
                        <li>

                            <h3> Pescatarian</h3>

                            <p>
                                Everything is allowed except meat and meat
                                by-products - some pescetarians eat eggs and
                                dairy, some do not.
                            </p>
                            <NavLink className='s-button' to="/recipe/add/pescatarian">Show recipes</NavLink>
                            <RecipesForDiets dietName="pescatarian" />
                        </li>
                        <li>

                            <h3> Paleolithic</h3>
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
                            <NavLink className='s-button' to="/recipe/add/paleolithic">Show recipes</NavLink>
                            <RecipesForDiets dietName="paleolithic" />
                        </li>
                        <li>

                            <h3> Primal</h3>
                            <p>
                                Very similar to Paleo, except dairy is allowed -
                                think raw and full fat milk, butter, ghee, etc.
                            </p>
                            <NavLink className='s-button' to="/recipe/add/primal">Show recipes</NavLink>
                            <RecipesForDiets dietName="primal" />
                        </li>
                        <li>

                            <h3> Calorie-based</h3>

                            <p>
                                The average woman needs to eat about 2,000 calories per day to maintain her weight, and 1,500 calories per day to lose one pound of weight per week.
                                Meanwhile, the average man needs 2,500 calories to maintain, and 2,000 to lose one pound of weight per week.
                            </p>
                            <NavLink className='s-button' to="/recipe/add/calorie">Show recipes</NavLink>
                            <RecipesForDiets dietName="calorie" />
                        </li>
                        <li>

                            <h3> Protein diet</h3>

                            <p>
                                Going on a high-protein diet may help you tame your hunger, which could help you lose weight.
                                You can try it by adding some extra protein to your meals. Give yourself a week, boosting protein gradually.
                                Remember, calories still count. You'll want to make good choices when you pick your protein.
                            </p>
                            <NavLink className='s-button' to="/recipe/add/protein">Show recipes</NavLink>
                            <RecipesForDiets dietName="protein" />
                        </li>
                    </ul>



                </div>
            </section>

        );
    }
}

export default ListOfDiets;
