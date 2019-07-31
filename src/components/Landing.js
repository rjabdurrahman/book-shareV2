import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Landing extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="header__search-box">
                        <input className="search-box-text" type="text" placeholder="Type to search" />
                        <a href="data.html" className="search-box-btn"><i className="icon fas fa-search" /></a>
                    </div>
                    <div className="header__main-nav">
                        <ul>
                            <li>
                                <Link to="/signup" className="btn1 btn2--header">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/login" className="btn1 btn2--header">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__text-box">
                        <div className="heading-text">"A room without books is like a body without a soul".</div>
                        <div className="heading-text__sub">― Marcus Tullius Cicero</div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Landing
