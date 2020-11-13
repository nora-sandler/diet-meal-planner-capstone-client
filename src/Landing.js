import React from "react"
import "./App.css"
import Footer from "./Footer"
import Header from "./Header"


class Landing extends React.Component {
  render() {
    return (
      <div className = 'landing-main'>
        <div className="Landing">
          <Header />
          <section id="landingPage">
            <div id="description">
              <h2>Diet meal planner</h2>
              <h5>Nowadays there are a lot of people who are following different diets
              for some reasons including medical purpose, weight loss, muscle gain
              or just for eating healthy. This app is perfect for this purpose. 
              Just choose the diet you are following and check out all recipes 
              available for this diet.
              Save the recipe and you are all set! 
            </h5>
            </div>
          </section>
          {/* <Register/>
        <Login/> */}
          <Footer />
        </div>
      </div>

    );
  }
}

export default Landing;
