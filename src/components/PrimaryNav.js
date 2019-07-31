import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class PrimaryNav extends Component {
    render() {
        return (
            <div className="primary-nav">
                <div className=" primary-nav__search-input">
                    <input className="search-input__text" type="text" placeholder="Type to search" />
                    <Link to="/" className="search-input__btn">
                        <i className="icon fas fa-search" />
                    </Link>
                </div>
                <div className="primary-nav__button">
                    <ul>
                        <li>
                            <Link to="/signup" className="btn1 btn2--header">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/login" className="btn1 btn2--header">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/profile" className="btn1 btn2--header">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PrimaryNav
