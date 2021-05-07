import React, { useState } from 'react';

//Components imported here
import Navbar from "../../Components/Navbar";
import Carousal from "./Carousal";
import About from "./About";
import CompanyDetails from "./CompanyDetails";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "../../Components/Footer";
//Components imported here

import { connect } from "react-redux";
import { setTodoList } from '../../store/action/index';

import '../../css/Home.css';

const Home = (props) => {
    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Navbar />
                </div>
            </div>


            <Carousal />

            <div className="container">
                <About />
                <CompanyDetails />
                <Services />
                <Projects />
                <Testimonials/>
            </div>


            <Footer />

        </div>
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
export default connect(mapStateToProps, mapDispatchToProp)(Home);