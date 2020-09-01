import React from 'react';
import Header from './Header';


class AddRecipes extends React.Component {
  render() {
    return (
      <div className="AddRecipes">
        <Header/>
        <section id="addRecipesPage">
      <div className="listOfMeals">
        <h2>Choose your meal</h2>
        <p>
          Discover variety of delicious recipes to cook and enjoy!
        </p>
        <h2>List of recipes</h2>
        <ul>
          <li>
            <a href="#"
              >Recipe 1
              <img alt="Recipe1Img" src="img.jpg" alt="alt-image"/>
            </a>
          </li>
          <li>
            <a href="#"
              >Recipe 2
              <img alt="Recipe2Img" src="img.jpg" alt="alt-image"/>
            </a>
          </li>
          <li>
            <a href="#"
              >Recipe 3
              <img alt="Recipe3Img" src="img.jpg" alt="alt-image" />
            </a>
          </li>
        </ul>
        <button type="submit">Next</button>
     </div>
    </section>
      </div>
    );
  }
  
}

export default AddRecipes;
