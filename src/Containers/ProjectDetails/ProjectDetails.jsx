import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import { Link, useHistory } from "react-router-dom"
import '../../css/ProjectDetails.css';

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

const ProjectDetails = (props) => {
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
                <h1 className="projectTitlepd">Macdonald Road House / Philip Stejskal Architecture</h1>
                <br />

                <div className="border">
                    <ImageGallery items={images} thumbnailPosition="right" autoPlay={true} />
                </div>
                <br />

                <h6>Curated by <b>Hana Abdel</b></h6>

                <br />

                <div className="border">
                    <div className="container">
                        <h4 className="mt-3"><b>Description :</b></h4>
                        <p className="discParaPD">A 5 marla hourse created by architects of Team over cs Pakistan. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime beatae impedit cupiditate qui veritatis sint voluptatum quibusdam. Modi amet nam deserunt possimus id, mollitia alias nulla ex, impedit cumque quisquam?</p>
                        <hr />
                        <h4 className="mt-2"><b>Details :</b></h4>
                        <br />
                        <h6 className="discPD d-flex mt-0"><i className="fas fa-users mr-2 fa-lg"></i><p>Architects: <span className="discLinkPD">Philip Stejskal Architecture</span></p></h6>
                        <h6 className="discPD d-flex"><i className="fas fa-chart-area mr-2 fa-lg"></i>&nbsp;<p>Area: <span className="discLinkPD">200</span>m²</p></h6>
                        <h6 className="discPD d-flex"><i className="far fa-calendar-alt mr-2 fa-lg"></i>&nbsp;&nbsp;<p>Year: <span className="discLinkPD">2020</span></p></h6>
                        <h6 className="discPD d-flex"><i className="fas fa-camera-retro mr-2 fa-lg"></i>&nbsp;<p>Photographs: <span className="discLinkPD">Bo Wong</span></p></h6>
                        <h6 className="discPD d-flex"><i className="fas fa-cube mr-2 fa-lg"></i>&nbsp;<p>Manufacturers: <span className="discLinkPD">Midland Brick,</span>Barestone, CSR Gyprock, Fielders Prominence</p></h6>
                        <h6 className="discPD d-flex"><i className="fas fa-square-full mr-2 fa-lg"></i>&nbsp;<p>Structural Engineering: <span className="discLinkPD">Andreotta Cardenosa Consulting Engineers</span></p></h6>

                        <h6 className="discPD ml-4 d-flex">&nbsp;&nbsp;&nbsp;<p> Landscape Architect: <span className="discLinkPD">Annghi Tran Landscape Architecture Studio</span></p></h6>
                        <h6 className="discPD ml-4 d-flex">&nbsp;&nbsp;&nbsp;<p> Project Architects: <span className="discLinkPD">Louise Allen, Julia Kiefer, Jaime Mayger, Philip Stejskal</span></p></h6>
                        <h6 className="discPD ml-4 d-flex">&nbsp;&nbsp;&nbsp;<p> City: <span className="discLinkPD">Applecross</span></p></h6>
                        <h6 className="discPD ml-4 d-flex">&nbsp;&nbsp;&nbsp;<p> Country: <span className="discLinkPD">Australia</span></p></h6>
                        <h6 className="discPD d-flex"><i className="fas fa-compass mr-2 fa-lg"></i>&nbsp;&nbsp;<p> Project Location:</p></h6>
                        <iframe id="mappd" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3402.726278928045!2d74.44907!3d31.476715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190926aaaaaaab%3A0xef04fa700c084abd!2sTeam%20Overcs%20Architects!5e0!3m2!1sen!2s!4v1621110029864!5m2!1sen!2s" allowFullScreen loading="eager" />
                    </div>
                </div>

            </div>


            <br />
            <br />
            <Footer />
            {/* Projects section */}
        </div >
    )
}

export default ProjectDetails;