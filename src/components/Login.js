import React, { Component } from 'react'
import PrimaryNav from '../components/PrimaryNav'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="login-div">
                <PrimaryNav></PrimaryNav>
                <section className="section-book">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <form onSubmit={this.handleSubmit} className="form">
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
                                        <input type="email" className="form__input" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} autoFocus required />
                                        <label htmlFor="email" className="form__label">Email Address</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="password" className="form__input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
                                        <label htmlFor="password" className="form__label">Password</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="submit" className="btn btn--green" value="Log in  →"/>
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
