import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

// importing images
import img1 from "../../assets/service-architechture.JPEG XR";
import img2 from "../../assets/service-interior.JPEG XR";
import img3 from "../../assets/how-we-work.JPEG XR";
// importing images

import { Link, useHistory } from "react-router-dom"
import '../../css/Projects.css';

const Projects = (props) => {
    const history = useHistory();
    const handleRowClick = () => {
        history.push(`/docs`);
    }

    useEffect(() => {
        // The debounce function receives our function as a parameter
        const debounce = (fn) => {
            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame;
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params) => {
                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {
                    // Call our function and pass any params we received
                    fn(...params);
                });
            }
        };

        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY;
        }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();
    })

    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Navbar />
                </div>
            </div>

            <div className="bgimg-1">
                <div className="caption">
                    <h1 className="TitleCarousal"><b>Projects</b></h1>
                    <div className="disc_top_width">
                        <h3 className="DiscCarousal">Home / Projects</h3>
                    </div>
                </div>
            </div>
            {/* Projects section */}
            <div className="container">
                <br />
                {/* Tabs navs */}
                <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                    <li style={{ marginLeft: "0px" }} className="nav-item tabstitle" role="presentation">
                        <a className="nav-link active" id="ex3-tab-1" data-mdb-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">All</a>
                    </li>
                    <li className="nav-item tabstitle" role="presentation">
                        <a className="nav-link" id="ex3-tab-2" data-mdb-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">Commercial Exterior</a>
                    </li>
                    <li className="nav-item tabstitle" role="presentation">
                        <a className="nav-link" id="ex3-tab-3" data-mdb-toggle="tab" href="#ex3-tabs-3" role="tab" aria-controls="ex3-tabs-3" aria-selected="false">Commercial Interior</a>
                    </li>
                    <li className="nav-item tabstitle" role="presentation">
                        <a className="nav-link" id="ex3-tab-4" data-mdb-toggle="tab" href="#ex3-tabs-4" role="tab" aria-controls="ex3-tabs-4" aria-selected="false">Residential Exterior</a>
                    </li>
                    <li className="nav-item tabstitle" role="presentation">
                        <a className="nav-link" id="ex3-tab-5" data-mdb-toggle="tab" href="#ex3-tabs-5" role="tab" aria-controls="ex3-tabs-5" aria-selected="false">Residential Interior</a>
                    </li>
                </ul>
                {/* Tabs navs */}
                {/* Tabs content */}
                <div className="tab-content" id="ex2-content">
                    <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
                        {/* Ye */}
                        {/* <div class="wrapper">
                            <div class="parent" onclick="">
                                <div class="child ">
                                    <img src="https://media.timeout.com/images/101602611/image.jpg" alt="Geeks Image" />
                                    <a class="txtwrapper" href="#">Muhammad Bilal Mohib</a>
                                </div>
                            </div>

                            <div class="parent right" onclick="">
                                <div class="child bg-two">
                                    <a href="#">London</a>
                                </div>
                            </div>

                            <div class="parent" onclick="">
                                <div class="child bg-three">
                                    <a href="#">New York</a>
                                </div>
                            </div>
                        </div> */}
                        <div>
                            <ul className="portfolio">
                                <li className="Residential-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/res-e/8.jpg" />
                                        <h3 className="InfoBlock">Residential Exterior<br /><span className="info"> 2 Kanal </span></h3><figcaption><a href="#res-e8" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/2.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i2" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/3.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i3" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Exterior<br /><span className="info"></span></h3><figcaption><a href="#com-e7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i4" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/4.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"></span></h3><figcaption><a href="#com-i7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Exterior<br /><span className="info"></span></h3><figcaption><a href="#com-e7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i4" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/4.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"></span></h3><figcaption><a href="#com-i7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                        {/* Ye */}
                    </div>
                    <div className="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
                    <div>
                            <ul className="portfolio">
                                <li className="Residential-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/res-e/8.jpg" />
                                        <h3 className="InfoBlock">Residential Exterior<br /><span className="info"> 2 Kanal </span></h3><figcaption><a href="#res-e8" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/2.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i2" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/3.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i3" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Exterior<br /><span className="info"></span></h3><figcaption><a href="#com-e7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i4" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/4.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"></span></h3><figcaption><a href="#com-i7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="ex3-tabs-3" role="tabpanel" aria-labelledby="ex3-tab-3">
                    <div>
                            <ul className="portfolio">
                                <li className="Residential-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/res-e/8.jpg" />
                                        <h3 className="InfoBlock">Residential Exterior<br /><span className="info"> 2 Kanal </span></h3><figcaption><a href="#res-e8" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/2.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i2" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/3.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i3" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Exterior<br /><span className="info"></span></h3><figcaption><a href="#com-e7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i4" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/4.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"></span></h3><figcaption><a href="#com-i7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="ex3-tabs-4" role="tabpanel" aria-labelledby="ex3-tab-4">
                    <div>
                            <ul className="portfolio">
                                <li className="Residential-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/res-e/8.jpg" />
                                        <h3 className="InfoBlock">Residential Exterior<br /><span className="info"> 2 Kanal </span></h3><figcaption><a href="#res-e8" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/2.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i2" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/3.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i3" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Exterior<br /><span className="info"></span></h3><figcaption><a href="#com-e7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i4" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/4.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"></span></h3><figcaption><a href="#com-i7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="ex3-tabs-5" role="tabpanel" aria-labelledby="ex3-tab-5">
                    <div>
                            <ul className="portfolio">
                                <li className="Residential-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/res-e/8.jpg" />
                                        <h3 className="InfoBlock">Residential Exterior<br /><span className="info"> 2 Kanal </span></h3><figcaption><a href="#res-e8" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/2.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i2" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/3.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i3" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Exterior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Exterior<br /><span className="info"></span></h3><figcaption><a href="#com-e7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-e/7.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"> 6th Sense Headoffice </span></h3><figcaption><a href="#com-i4" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                                <li className="Commercial-Interior">
                                    <figure>
                                        <img src="http://galleriadesign.pk/images/projects/new/com-i/4.jpg" />
                                        <h3 className="InfoBlock">Commercial Interior<br /><span className="info"></span></h3><figcaption><a href="#com-i7" id="fp">+</a></figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Tabs content */}
            </div>

            <br />
            <br />
            <Footer />
            {/* Projects section */}
        </div >
    )
}

export default Projects;