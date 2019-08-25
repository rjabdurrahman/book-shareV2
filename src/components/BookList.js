import React, { Component } from 'react'
import './BookList.css';
import axios from 'axios';
import link from '../restApi';

export class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookList: []
        }
    }

    componentWillMount() {
        axios.get(link + '/api/add-book')
            .then(res => this.setState({ bookList: res.data }))
            .catch(err => console.log(err));
    }
    render() {
        const allBooks = this.state.bookList.map(book => (
            <div className="col-sm-3">
                <div className="thumb-wrapper">
                    <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                    <div className="img-box">
                        <img src="https://static01.nyt.com/images/2019/08/07/books/06bookalbinati1/06bookalbinati1-jumbo.jpg" className="img-responsive img-fluid" alt="" />
                    </div>
                    <div className="thumb-content">
                        <h4>{book.title}</h4>
                        <div className="star-rating">
                            <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                            </ul>
                        </div>
                        <a href="data.html" className="btn btn-primary">Want To Read <i class="fas fa-angle-down"></i></a>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Featured <b>Products</b></h2>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
                            {/* Carousel indicators */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                <li data-target="#myCarousel" data-slide-to={1} />
                                <li data-target="#myCarousel" data-slide-to={2} />
                            </ol>
                            {/* Wrapper for carousel items */}
                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                    <div className="row">
                                        {allBooks}
                                    </div>
                                </div>
                                {/* Another */}
                                <div className="item carousel-item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="https://static01.nyt.com/images/2019/08/07/books/06bookalbinati1/06bookalbinati1-jumbo.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Sample Book 4</h4>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Want To Read <i class="fas fa-angle-down"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="https://static01.nyt.com/images/2019/08/07/books/06bookalbinati1/06bookalbinati1-jumbo.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Sample Book 5</h4>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Want to Read <i class="fas fa-angle-down"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="https://static01.nyt.com/images/2019/08/07/books/06bookalbinati1/06bookalbinati1-jumbo.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Sample Book 6</h4>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Want to Read <i class="fas fa-angle-down"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End */}
                                    </div>
                                </div>
                                {/* End */}
                            </div>
                            {/* Carousel controls */}
                            <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-angle-left" />
                            </a>
                            <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-angle-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList
