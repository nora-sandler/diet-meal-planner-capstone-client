import React from "react";
import Header from "./Header";


class ListOfDiets extends React.Component {
  render() {
    return (
      <div className="Landing">
        <Header/>
        <section id="ListOfDiets">
          <div className="listOfDiets">
            <h2>1.Choose your diet</h2>
            <p>
              Our diet list includes variety of diets and allows to choose tde
              diet you would like to follow or already following.
            </p>
            <h3>List of diets</h3>
            <ul>
              <li>
                <a href="#">Keto</a>
              </li>
              <li>
                <a href="#">Vegetarian</a>
              </li>
              <li>
                <a href="#">Paleo</a>
              </li>
            </ul>
            <button type="submit">Next</button>
          </div>
        </section>
      </div>
    );
  }
}

export default ListOfDiets;
