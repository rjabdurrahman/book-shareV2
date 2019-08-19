import React, { Component } from 'react'
import './BookList.css';

export class BookList extends Component {
    render() {
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
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/ipad.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Apple iPad</h4>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <p className="item-price"><strike>$400.00</strike> <b>$369.00</b></p>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/headphone.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Sony Headphone</h4>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <p className="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
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
                                                    <h4>Macbook Air</h4>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/nikon.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Nikon DSLR</h4>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <p className="item-price"><strike>$315.00</strike> <b>$250.00</b></p>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item carousel-item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/play-station.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Sony Play Station</h4>
                                                    <p className="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/macbook-pro.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Macbook Pro</h4>
                                                    <p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/speaker.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Bose Speaker</h4>
                                                    <p className="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/galaxy.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Samsung Galaxy S8</h4>
                                                    <p className="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item carousel-item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/iphone.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Apple iPhone</h4>
                                                    <p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/canon.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Canon DSLR</h4>
                                                    <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/pixel.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Google Pixel</h4>
                                                    <p className="item-price"><strike>$450.00</strike> <span>$418.00</span></p>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o" /></span>
                                                <div className="img-box">
                                                    <img src="/examples/images/products/watch.jpg" className="img-responsive img-fluid" alt="" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Apple Watch</h4>
                                                    <p className="item-price"><strike>$350.00</strike> <span>$330.00</span></p>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                        </ul>
                                                    </div>
                                                    <a href="data.html" className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
