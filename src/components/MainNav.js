import React, { Component } from 'react'

export class MainNav extends Component {
    render() {
        return (
            <div className="landing-nav">
                <div className="secondary-nav">
                    <ul>
                        <li className="active"><a href>Home</a> </li>
                        <li> <a href="#popup">Book Selection</a>
                            {/* <ul>
                    <li class="active"><a href="">Nobel</a></li>
                    <li> <a href="">History</a> </li>
                    <li><a href="">Love</a></li>
                    <li><a href="">Action</a></li>
                    <li><a href="">Action</a></li>

                  </ul> */}
                        </li>
                        <li> <a href>Author</a>
                            <ul>
                                <li className="active"><a href="bookdetails.html">xxxxxx</a></li>
                                <li> <a href>aYYYYY</a> </li>
                                <li><a href>ZZZZZZ</a></li>
                            </ul>
                        </li>
                        <li><a href>About</a></li>
                        <li><a href="profile.html">profile</a></li>
                        <li><a href>Feature</a></li>
                        <li> <a href>Contact</a></li>
                        <input className="search-primary" type="text" placeholder="Type to search" />
                        <a className="search--btn" href><i className="search-icon fas fa-search" /></a>
                    </ul>
                </div>
            </div>

        )
    }
}

export default MainNav
