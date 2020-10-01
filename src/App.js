import React from 'react';
import ReactDOM from "react-dom"
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing'
import AddRecipes from './AddRecipes';
import HowItWorks from './HowItWorks';
import ListOfDiets from './ListOfDiets';
import RecipeDetails from './RecipeDetails'
// import WeeklyCalendar from './WeeklyCalendar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Landing} />

        {/* <Route path='/how-it-works' component={HowItWorks} /> */}

        <Route path='/diet/show/' component={ListOfDiets} />

        <Route path='/recipe/add/:dietName' component={AddRecipes} />

        <Route path='/recipe-details/:recipeId' component={RecipeDetails} />

        {/* <Route path='/weekly-calendar/' component={WeeklyCalendar} /> */}


      </div>
    );
  }

}

export default App;
