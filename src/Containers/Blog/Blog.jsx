import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ProjectsList from "../../Components/ProjectsList";

import firebase from "../../firebase/index";

// importing images
import img1 from "../../assets/service-architechture.JPEG XR";
import img2 from "../../assets/service-interior.JPEG XR";
import img3 from "../../assets/how-we-work.JPEG XR";
// importing images

import { Link, useHistory } from "react-router-dom"
import '../../css/Blog.css';

const Blog = (props) => {

    // const [projectsData, setprojectsData] = useState([]);

    // const history = useHistory();
    // const handleRowClick = (e) => {
    //     history.push(`/${e}`);
    // }

    // useEffect(() => {
    //     let jobData = [];

    //     //Taking data from job vacancy form
    //     firebase.database().ref(`Projects/`).on('value', (snapshot) => {
    //         snapshot.forEach(function (data) {
    //             jobData.push(data.val())
    //             console.log(data.val())
    //         })

    //         console.log(jobData);

    //         setprojectsData(jobData);



    //     })
    // }, [])

    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Navbar transparent={true} />
                </div>
            </div>

            <div className="bgimg-1">
                <div className="caption">
                    <h1 className="TitleCarousal"><b>Blog</b></h1>
                    <div className="disc_top_width">
                        <h3 className="DiscCarousal">Home / Blogs</h3>
                    </div>
                </div>
            </div>

            {/* Projects section */}
            <div className="container paddingMobile">
                <br />
                <h1>Blog</h1>
            </div>

            <br />
            <br />
            <Footer />
            {/* Projects section */}
        </div >
    )
}

export default Blog;