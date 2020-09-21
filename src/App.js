import React from 'react';
import ReactDOM from "react-dom"
import './App.css';
import Landing from './Landing'
// import AddRecipes from './AddRecipes';
import HowItWorks from './HowItWorks';
import ListOfDiets from './ListOfDiets';
import RecipeDetails from './RecipeDetails'
import WeeklyCalendar from './WeeklyCalendar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        {/* <Landing/> */}
        {/* <HowItWorks/> */}
        <ListOfDiets/>
        {/* <AddRecipes/> */}
        {/* <RecipeDetails/> */}
        {/* <WeeklyCalendar/> */}
        

      </div>
    );
  }
  
}

export default App;
