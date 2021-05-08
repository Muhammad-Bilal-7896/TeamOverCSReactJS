import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

// importing images
import img1 from "../../assets/service-architechture.JPEG XR";
import img2 from "../../assets/service-interior.JPEG XR";
import img3 from "../../assets/how-we-work.JPEG XR";
// importing images

import { Link, useHistory } from "react-router-dom"
import '../../css/Certification.css';

const Certification = (props) => {
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
                    <h1 className="TitleCarousal"><b>OUR CERTIFICATIONS</b></h1>
                    <div className="disc_top_width">
                        <h3 className="DiscCarousal">Home / Certifications</h3>
                    </div>
                </div>
            </div>
            {/* Projects section */}
            <div className="container">
                <br />
                {/* The Content will be placed here for certification */}
                <div className="row">
                <div>
        
        <h2 id="demo15">15. Circle</h2>
        <div className="hover15 column">
          <div>
            <figure><img src="http://galleriadesign.pk/images/certificates/1.jpg" /></figure>
            <span>Hover</span>
          </div>
          <div>
            <figure><img src="http://galleriadesign.pk/images/certificates/2.jpg" /></figure>
            <span>Hover</span>
          </div>
          <div>
            <figure><img src="http://galleriadesign.pk/images/certificates/3.jpg" /></figure>
            <span>Hover</span>
          </div>
        </div>
      </div>
</div>
                {/* The Content will be placed here for certification */}
            </div>

            <br />
            <br />
            <Footer />
            {/* Projects section */}
        </div >
    )
}

export default Certification;