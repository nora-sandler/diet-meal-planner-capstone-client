import React, { Component } from 'react'
import TokenService from "./services/token-service.js"
import { Link } from 'react-router-dom'


class navbar extends Component {

    logOutClick = () => {
        console.log('Logging out')
        TokenService.clearAuthToken()
        TokenService.getUserId = (id) => {
            console.log(id)
        }

        window.location = '/'
    }

    render() {


        return (
            <header className='clearfix'>
                <h4>Diet meal planner</h4>
                {TokenService.hasAuthToken() ?
                    <nav className="nav">
                        <ul className='link'>
                            <li>
                                <Link to="/">
                                    <i class="fa fa-home"></i>
                                    <span className='navlink-text'>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/diet/show/">
                                    <i class="fa fa-list"></i>
                                    <span className='navlink-text'>List of diets</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.logOutClick}>
                                    <i class="fa fa-sign-out"></i>
                                    <span className='navlink-text'>Log Out</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    : ''}
            </header>
        )
    }
}

export default navbar 