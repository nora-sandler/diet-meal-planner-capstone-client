import React from "react";
import "./App.css";
import Footer from "./Footer";
import Login from "./Login";
import Header from "./Header";
import Register from "./Register";

class Landing extends React.Component {
  render() {
    return (
      <div className="Landing">
        <Header/>
        <section id="landingPage">
          <div id="description">
            Nowadays there are a lot of people who are following different diets
            for some reasons including medical purpose, weight loss, muscle gain
            or just for eating healthy. That's why I have decided to create an
            app that allows people to choose the diet they are following and see
            all variety of recipes available, choose the most interesting recipe
            for them and add it into a weekly meal calendar. This app will not
            only save a lot of time but also will make meal planning easier and
            organized.
          </div>
        </section>
        <Register />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default Landing;
