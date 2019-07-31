import React, { Component } from 'react'
import PrimaryNav from '../components/PrimaryNav'

export class Login extends Component {
    render() {
        return (
            <div className="login-div">
                <PrimaryNav></PrimaryNav>
                <section className="section-book">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <form action className="form">
                                    <div className=" u-margin-bottom-medium">
                                        <h2 className="heading-secondary">
                                            Start sign in now
                                    </h2>
                                    </div>
                                    <div className="form__group">
                                        <a href="data.html" className=" btn-text ">Sign In with FaceBook →</a>
                                        <a href="data.html" className=" btn-text">Sign In with Google →</a>
                                    </div>
                                    <div className="form__group">
                                        <input type="email" className="form__input" placeholder="Email Address" id="email" required />
                                        <label htmlFor="email" className="form__label">Email Address</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="password" className="form__input" placeholder="Password" id="password" required />
                                        <label htmlFor="password" className="form__label">Password</label>
                                    </div>
                                    <div className="form__group">
                                        <button className="btn btn--green">Log in  →</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login
