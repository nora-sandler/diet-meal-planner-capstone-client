import React from "react";
import Header from "./Header";
import TokenService from "./services/token-service.js";
import config from "./config";

class ListOfDiets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dietsByUserId: [],
          diets:[]
         };
      }
    
      componentDidMount(){
        
        //let currentUser = TokenService.getUserId();
        let currentUser = 1;
  
        let getDietByUserId = `${config.API_ENDPOINT}/recipes/diets-by-user-id/${currentUser}`;

    
        fetch(getDietByUserId)
       
        .then(dietsInList => dietsInList.json())
        .then(dietsInList => {
             this.setState({
              dietsByUserId: dietsInList
          });
          console.log(this.state)
        })
    
        .catch(error => this.setState({ error }))
          console.log('Stateful component Dashboard successfully mounted.');
      }

      // handleSubmit(event) {
      //   console.log('Your diet is: ' + this.state.diets);
      //   event.preventDefault();
      // }
      

    deleteDiet(event) {
      event.preventDefault()
  
      const data = {}
  
      const formData = new FormData(event.target)
  
      for (let value of formData) {
          data[value[0]] = value[1]
      }
  
      console.log(data)
  
      let {dietId, dietListId} = data;
      console.log(dietId, dietListId)
      const requestOptions = {
        method: 'DELETE'
      };
  
      fetch(`${config.API_ENDPOINT}/diets/diet/${dietId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        }
  
      })
  
      .then(response => {
  
        window.location = `/dietlist/show/${dietListId}`
      })
  
    }

 
    render() {
      const existingDiets = 
      this.state.diets.map((diet, key) => {
      const linkString = `/diet/show/${diet.id}`
  
      let dietInfo = {
        dietId: `${diet.id}`,
        dietListId: `${this.props.match.params.dietListId}`
      }
        return (

          <section id="listOfDiets">
            <div className="listOfDiets">
                <h3>Choose your diet</h3>
                <p>
                  Our diet list includes variety of diets and allows to
                  choose tde diet you would like to follow or already
                  following.
                </p>
                <ul>
                  <li>
                      <h3>Gluten Free (3)</h3>
                      <p>Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                  <li>
                      <h3>Ketogenic (0)</h3>
                      <p>The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                  <li>
                      <h3>Vegetarian (0)</h3>
                      <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                  <li>
                      <h3>Lacto-Vegetarian (0)</h3>
                      <p>All ingredients must be vegetarian and none of the ingredients can be or contain egg.</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                  <li>
                      <h3>Ovo-Vegetarian (0)</h3>
                      <p>All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                  <li>
                      <h3>Vegan (0)</h3>
                      <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                  <li>
                      <h3>Pescetarian (0)</h3>
                      <p>Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                  <li>
                      <h3>Paleo (0)</h3>
                      <p>Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                  <li>
                      <h3>Primal (0)</h3>
                      <p>Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                  <li>
                      <h3>Whole30 (0)</h3>
                      <p>Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.</p>
                      <form className="dietForm"onSubmit={this.deleteDiet}>
                        <input type='hidden' name='dietId' defaultValue={diet.id}></input>
                        <input type='hidden' name='dietId' defaultValue={dietInfo.dietListId}></input>
                        <button type='submit' className='dietDeleteBtn'>Delete Diet</button>
                        <button className="s-button" type="submit">Next</button>
                      </form>
                  </li>
                </ul>
            </div>
          </section>
        )
    }
  }
}
export default ListOfDiets;