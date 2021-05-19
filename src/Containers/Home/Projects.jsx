import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { setTodoList } from '../../store/action/index';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Link } from "react-router-dom"
import '../../Styling/Projects.css';

const Projects = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 767 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    // const changeKey = (e) => {
    //     props.setCurrentKey(e);
    //     console.log("The Key is : ", props.SET_KEY);
    // }

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Our Projects */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="c-b"><b>LATEST PROJECT</b></h1>
                    </div>
                </div>
            </div>
            <br />

            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
           
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                autoPlay={true}
                centerMode={false}
            >
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="http://prisma-ksa.com/wp-content/uploads/2017/02/10-2.jpg" alt="Card image cap" className="img-fluid p-img" />
                        <Link to="/project/details">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Classical Design | Bahria Town, Lahore</h5>
                        <p className="text-primary">12-23-2019</p>
                        <p className="card-text">
                            A nice blend of classical and modern features!.
                                </p>
                        <Link to="/project/details" className="btn btn-warning projects-btn">View Project.</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="http://prisma-ksa.com/wp-content/uploads/2017/02/6-2.jpg" alt="Card image cap" className="img-fluid p-img" />
                        <Link to="/project/details">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">1 Kanal House Design | DHA, Lahore</h5>
                        <p className="text-primary">12-23-2019</p>
                        <p className="card-text">
                            One Kanal house design having a smart design. A simple and clean house elevation fulfilling both interior and exterior requirements.
                                    </p>
                        <Link to="/project/details" className="btn btn-warning projects-btn">View Project</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="http://prisma-ksa.com/wp-content/uploads/2017/02/1-2.jpg" alt="Card image cap" className="img-fluid p-img" />
                        <Link to="/project/details">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">House Design | Bahria Town, Lahore</h5>
                        <p className="text-primary">12-23-2019</p>
                        <p className="card-text">
                            One Kanal house design inspired by contemporary Architecture having a unique blend of vertical and horizontal elements.
                                </p>
                        <Link to="/project/details" className="btn btn-warning projects-btn">View Project</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="http://prisma-ksa.com/wp-content/uploads/2017/02/5-2.jpg" alt="Card image cap" className="img-fluid p-img" />
                        <Link to="/project/details">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Contemporary Design | DHA, Lahore</h5>
                        <p className="text-primary">12-23-2019</p>
                        <p className="card-text">
                        One Kanal house design following the style of the moment. A clean design depicting the design approach of today but also has the flexibility for the future.
                                </p>
                        <Link to="/project/details" className="btn btn-warning projects-btn">View Project</Link>
                    </div>
                </div>
            </Carousel>

            <br />
            {/* Our Projects */}
        </div >
    )
}

const mapStateToProps = (state) => ({
    list: state.app.SETTODOLIST,
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setTodoList: (data) => dispatch(setTodoList(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Projects);