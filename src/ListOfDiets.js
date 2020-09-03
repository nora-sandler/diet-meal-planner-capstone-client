import React from "react";
import Header from "./Header";

class ListOfDiets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      books: [],
      booksFound: [],
      params: {}
    };
  }
  //modify the constructor, the fuctions 
  deleteBook(event) {
    event.preventDefault()

    const data = {}

    const formData = new FormData(event.target)

    for (let value of formData) {
        data[value[0]] = value[1]
    }

    console.log(data)//should be done to addRecipes and List of diets

    let {bookId, collectionId } = data;
    console.log(bookId, collectionId)
    const requestOptions = {
      method: 'DELETE'
    };


    
    fetch(`${config.API_ENDPOINT}/books/book/${bookId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }

    })

    .then(response => {

      window.location = `/booklist/show/${collectionId}`
    })

  }
    render() {
        return (
            <div className="Landing">
                <Header />
                <section id="ListOfDiets">
                    <div className="listOfDiets">
                        <h2>1.Choose your diet</h2>
                        <p>
                            Our diet list includes variety of diets and allows
                            to choose tde diet you would like to follow or
                            already following.
                        </p>
                        <h3>List of diets</h3>
                        <form
                            className="registerForm"
                            onSubmit={this.registerUser}
                        >
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>

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
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default ListOfDiets;
