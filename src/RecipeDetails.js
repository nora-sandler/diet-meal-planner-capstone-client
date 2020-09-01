import React from "react";
import Header from "./Header";

class RecipeDetails extends React.Component {
  render() {
    return (
      <div className="RecipeDetails">
        <Header/>
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
                <option defaultValue="Saturday">Saturday</option>
                <option defaultValue="Sunday">Sunday</option>
              </select>
              <select name="meals" id="meals">
                <option defaultValue="Breakfast">Breakfast</option>
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
