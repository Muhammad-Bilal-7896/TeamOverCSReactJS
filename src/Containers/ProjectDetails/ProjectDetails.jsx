import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import firebase from "../../firebase/index";

import '../../css/ProjectDetails.css';

import { Link } from "react-router-dom";

import { connect } from "react-redux"
import { get_Blog_all_data } from '../../store/action/index';

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

function ProjectDetails(props) {

    const [projectsData, setprojectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [slideShowArray,setSlideShowArray] = useState([
        {
            original: '',
            thumbnail: ''
        }
    ]);

    const [key, setKey] = useState(0);

    useEffect(() => {
        let jobData = [];

        //Taking data from job vacancy form
        firebase.database().ref(`Projects/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                jobData.push(data.val())
                console.log(data.val())
            })

            console.log("TTTT", jobData);

            var tempArraySlideShow = [];

            for (let i = 0; i < jobData[props.SET_KEY].ImageURLArray.length; i++) {
                let tempObj = {
                    original: jobData[props.SET_KEY].ImageURLArray[i],
                    thumbnail: jobData[props.SET_KEY].ImageURLArray[i]
                }
                tempArraySlideShow.push(tempObj);
            }

            console.log("Barkhudar Dekho ghour se==>", tempArraySlideShow);

            setKey(props.SET_KEY);

            setSlideShowArray(tempArraySlideShow);

            setLoading(false);
            setprojectsData(jobData);

        })
    }, [])

    function createMarkup() {
        return {__html: 'First &middot; Second'};
    }

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

                {(loading) ? (
                    <h1 className="border text-center">Loading</h1>
                ) : (
                    <div>
                        <h1 className="projectTitlepd">{projectsData[key].Title}</h1>
                        <br />

                        <div className="border">
                            <ImageGallery items={slideShowArray} thumbnailPosition="right" autoPlay={true} />
                        </div>
                        <br />

                        <h6>Curated by <b>Hana Abdel</b></h6>

                        <br />

                        <div className="border">
                            <div className="container">
                                <h4 className="mt-3"><b>Description :</b></h4>
                                <p dangerouslySetInnerHTML={{__html:projectsData[key].Description}} className="discParaPD"/>
                                <hr />
                                <h4 className="mt-2"><b>Details :</b></h4>
                                <br />
                                <h6 className="discPD d-flex mt-0"><i className="fas fa-users mr-2 fa-lg"></i><p>Architects: <span className="discLinkPD">{projectsData[key].Architects}</span></p></h6>
                                <h6 className="discPD d-flex"><i className="fas fa-chart-area mr-2 fa-lg"></i>&nbsp;<p>Area: <span className="discLinkPD">{projectsData[key].Area} </span>m²</p></h6>
                                <h6 className="discPD d-flex"><i className="far fa-calendar-alt mr-2 fa-lg"></i>&nbsp;&nbsp;<p>Year: <span className="discLinkPD">{projectsData[key].CompletionDate}</span></p></h6>
                                {/* <h6 className="discPD d-flex"><i className="fas fa-camera-retro mr-2 fa-lg"></i>&nbsp;<p>Photographs: <span className="discLinkPD">Bo Wong</span></p></h6> */}
                                <h6 className="discPD d-flex"><i className="fas fa-cube mr-2 fa-lg"></i>&nbsp;<p>Manufacturers: <span className="discLinkPD">{projectsData[key].Manufacturers}</span></p></h6>
                                <h6 className="discPD d-flex"><i className="fas fa-square-full mr-2 fa-lg"></i>&nbsp;<p>Structural Engineering: <span className="discLinkPD">{projectsData[key].StructuralEngineers}</span></p></h6>

                                <h6 className="discPD ml-4 d-flex">&nbsp;&nbsp;&nbsp;<p> Landscape Architect: <span className="discLinkPD">{projectsData[key].LandscapeAchitects}</span></p></h6>
                                <h6 className="discPD ml-4 d-flex">&nbsp;&nbsp;&nbsp;<p> Project Architects: <span className="discLinkPD">{projectsData[key].ProjectArchitects}</span></p></h6>
                                <h6 className="discPD ml-4 d-flex">&nbsp;&nbsp;&nbsp;<p> City: <span className="discLinkPD">{projectsData[key].City}</span></p></h6>
                                <h6 className="discPD ml-4 d-flex">&nbsp;&nbsp;&nbsp;<p> Country: <span className="discLinkPD">{projectsData[key].Country}</span></p></h6>
                                <h6 className="discPD d-flex"><i className="fas fa-compass mr-2 fa-lg"></i>&nbsp;&nbsp;<p> Project Location:</p></h6>
                                <iframe id="mappd" src={projectsData[key].GoogleMapLink} allowFullScreen loading="lazy" />
                            </div>
                        </div>
                    </div>
                )}

            </div>


            <br />
            <br />
            <Footer />
            {/* Projects section */}
        </div>
    )
}

const mapStateToProps = (state) => ({
    SET_KEY: state.app.SET_KEY,
    projects_data: state.app.GET_SELL,
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    get_Blog_all_data: () => dispatch(get_Blog_all_data()),
})
export default connect(mapStateToProps, mapDispatchToProp)(ProjectDetails);