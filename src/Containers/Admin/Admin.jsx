import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import { Link, useHistory } from "react-router-dom"
import '../../css/Admin.css';

import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const Admin = (props) => {
    const history = useHistory();
    const handleRowClick = (e) => {
        history.push(`/${e}`);
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

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <div className="linkingPD">
                    <Link to="/">Home</Link>
                    <i className="fas fa-angle-right text-gray ml-3 mr-2"></i> <Link to="/projects">Projects</Link>
                    <i className="fas fa-angle-right text-gray ml-3 mr-2"></i> Houses
                   <i className="fas fa-angle-right text-gray ml-3 mr-2"></i> Lahore
                   <i className="fas fa-angle-right text-gray ml-3 mr-2"></i> <span className="text-projectpd">A 5-marla house in DHA</span>
                </div>
                <h1 className="projectTitlepd">Admin Panel</h1>

                <div>
                    {/* Tabs navs */}
                    <ul className="nav nav-tabs nav-fill mb-3 mt-2" style={{marginLeft:"-0.5%"}} id="ex1" role="tablist">
                        <li className="nav-item tabad" role="presentation">
                            <a className="nav-link active tabadminLink" data-mdb-toggle="tab" href="#ex2-tabs-1" role="tab" aria-controls="ex2-tabs-1" aria-selected="true">ALL PROJECTS</a>
                        </li>
                        <li className="nav-item tabad" role="presentation">
                            <a className="nav-link tabadminLink" id="ex2-tabadmin-2" data-mdb-toggle="tab" href="#ex2-tabs-2" role="tab" aria-controls="ex2-tabs-2" aria-selected="false">ALL BLOGS</a>
                        </li>
                        {/* <li className="nav-item tabad" role="presentation">
                            <a className="nav-link tabadminLink" data-mdb-toggle="tab" href="#ex2-tabs-3" role="tab" aria-controls="ex2-tabs-3" aria-selected="false">Another link</a>
                        </li> */}
                    </ul>
                    {/* Tabs navs */}
                    {/* Tabs content */}
                    <div className="tab-content" id="ex2-content">
                        <div className="tab-pane fade show active" id="ex2-tabs-1" role="tabpanel" aria-labelledby="ex2-tab-1">
                            <div className="container border">     
                                <button type="button" className="btn btn-primary btn-rounded btnAddNewProject mt-3"> Add New Project</button>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="ex2-tabs-2" role="tabpanel" aria-labelledby="ex2-tab-2">
                            Tab 2 content
                        </div>
                        {/* <div className="tab-pane fade" id="ex2-tabs-3" role="tabpanel" aria-labelledby="ex2-tab-3">
                            Tab 3 content
                        </div> */}
                    </div>
                    {/* Tabs content */}
                </div>

            </div>


            <br />
            <br />
            <Footer />
            {/* Projects section */}
        </div >
    )
}

export default Admin;