import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import DatePicker from 'react-date-picker';

import logo from "../../assets/logo copy.png"

import { Link, useHistory } from "react-router-dom"
import '../../css/Admin.css';

import firebase from "../../firebase/index";

import { storage } from '../../firebase/index';

import { MDBProgress } from 'mdbreact';

const currentDate = new Date();

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            status: null,
            // Here the important attributes start
            title: "",
            category: "",
            disc: "",
            architects: "",
            area: 0,
            completionDate: currentDate,
            manufacturers: "",
            StructuralEngineers: "",
            LandscapeAchitects: "",
            ProjectArchitects: "",
            City: "",
            Country: "",
            GoogleMapLink: "",
            // Here the important attributes start
            ImageURLArray: [],
            progress: 0,
            filesArray: [],

        };
        this.globalImageURLArray = [];
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    status: true
                })
                // setStatus(true);
            }
            else {
                // setStatus(false)
                this.setState({
                    status: false
                })
            }
        })

    }

    componentDidUpdate = () => {
        //console.log("Idhar dekh aik chez cdu mein ==>",this.state.ImageURLArray);
        console.log("Idhar dekh aik chez cdu mein ==>", this.state.ImageURLArray);
    }

    setCategoryFunction = (e) => {
        let selectCategory = e.target.value
        alert(`${selectCategory} is the Category you selected`);
        // setCategory(selectCategory);
        this.setState({
            category: selectCategory
        })
    }


    handleUpload = (e) => {
        if (true) {
            const file = Array.from(e.target.files);
            console.log("files==>", file);
            // setfilesArray(file);
            var progress = 0;
            file.forEach((file) => {
                const uploadTask = storage.ref(`images/${file.name}`).put(file);
                uploadTask.on('state_changed',
                    (snapshot) => {
                        // progrss function ....
                        progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                        console.log(progress)
                    },
                    (error) => {
                        // error function ....
                        alert(error);
                    },
                    () => {
                        // complete function ....
                        storage.ref('images').child(file.name).getDownloadURL().then(url => {
                            // setImageURL(url);
                            //console.log("UUUU==>",url);
                            this.globalImageURLArray.push(url);
                            this.setState({
                                progress: progress,
                                ImageURLArray: this.globalImageURLArray
                            })
                        })
                    });

            });
            // this.setState({

            // })
            console.log("dekhdekh==>", this.globalImageURLArray);
            // this.setState({
            //     ImageURLArray: this.globalImageURLArray
            // })

        }

    }

    sendDataProject = () => {
        ////////////////////////////To take the current date and time//////////////////////////////////
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        dateTime = dateTime.toString();
        // console.log("Completetion Date=>",this.state.completionDate)
        ////////////////////////////To take the current date and time//////////////////////////////////

        let cd = this.state.completionDate;

        let completionDate = cd.getFullYear() + '-' + (cd.getMonth() + 1) + '-' + cd.getDate();

        completionDate = completionDate.toString();

        var key = firebase.database().ref('Projects/').push().key;

        let Data = {
            Title: this.state.title,
            Category: this.state.category,
            Description: this.state.disc,
            ImageURLArray: this.state.ImageURLArray,
            Architects: this.state.architects,
            Area: this.state.area,
            CompletionDate: completionDate,
            Manufacturers: this.state.manufacturers,
            StructuralEngineers: this.state.StructuralEngineers,
            LandscapeAchitects: this.state.LandscapeAchitects,
            ProjectArchitects: this.state.ProjectArchitects,
            City: this.state.City,
            Country: this.state.Country,
            GoogleMapLink: this.state.GoogleMapLink,
            Key: key,
            timeSubmitted: dateTime
        }

        this.setState({
            // Here the important attributes start
            title: "",
            category: "",
            disc: "",
            architects: "",
            area: 0,
            completionDate: new Date(),
            manufacturers: "",
            StructuralEngineers: "",
            LandscapeAchitects: "",
            ProjectArchitects: "",
            City: "",
            Country: "",
            GoogleMapLink: "",
            // Here the important attributes start
            ImageURLArray: [],
            progress: 0,
            filesArray: []
        })

        this.globalImageURLArray = [];


        firebase.database().ref(`Projects/`).push(Data)
            .then(alert("Your Project is Submitted Successfully."))

    }


    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // console.log("The user is logged in and data is: " + user);
                alert("Logged in successfully")
                this.setState({
                    status: true
                })

            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage)
            });
    }

    sign_out = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert("Signed Out Successfully");

            this.setState({
                status: false
            })

        }).catch((error) => {
            // An error happened.
            console.log(error)
            alert(error);
        });

    }

    reset_password = () => {
        var auth = firebase.auth();
        var emailAddress = "bilalmohib7896@gmail.com";
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // alert(`A password reset email has been sent to ${emailAddress}.`)
        }).catch(function (error) {
            // An error happened.
            alert(error)
            // return;
        });
        alert(`A password reset email has been sent to ${emailAddress}.`)
    }

    render() {
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
                        <i className="fas fa-angle-right text-gray ml-3 mr-2"></i> <Link to="/admin">Admin</Link>
                    </div>
                    <h1 className="projectTitlepd">Admin Panel</h1>
                </div>

                {(firebase.auth().currentUser == null) ? (
                    <div>
                        <h3 className="text-center text-danger">Logged out</h3>
                    </div>
                ) : (
                    <div className="container d-flex justify-content-between">
                        <h3 className="text-success mt-2">Logged in</h3>
                        <button className="btn btn-danger" onClick={this.sign_out}>Sign Out</button>
                    </div>
                )}

                {(this.state.status) ? (
                    <div>
                        <div className="container">

                            <div>
                                {/* Tabs navs */}
                                <ul className="nav nav-tabs nav-fill mb-3 mt-2" style={{ marginLeft: "-0.5%" }} id="ex1" role="tablist">
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
                                            <button type="button" className="btn btn-primary btn-rounded btnAddNewProject mt-3">Add New Project</button>
                                            <br /><br />
                                            {(true) ? (
                                                <div>
                                                    <div className="container admin-container">
                                                        {/* Here the game starts */}
                                                        <div>
                                                            <h1 className="text-inverse mt-3">Upload a Project : -</h1>
                                                            <br />

                                                            <div>
                                                                <h3>Enter the Title of the project : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Enter the title for the blog" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <h3>Select A Category <span className="text-red">*</span></h3>

                                                            <div className="input-group input-group-md category_select">

                                                                <span className="input-group-addon glyphicon glyphicon-search" id="sizing-addon2"></span>

                                                                <select style={{ fontSize: "15px", width: "200px" }} value={this.state.category}
                                                                    onChange={(e) => this.setCategoryFunction(e)} className="form-control">
                                                                    <option value="Commercial Exterior">Commercial Exterior</option>
                                                                    <option value="Commercial Interior">Commercial Interior</option>
                                                                    <option value="Residential Exterior">Residential Exterior</option>
                                                                    <option value="Residential Interior">Residential Interior</option>
                                                                </select>
                                                            </div>
                                                            <br />




                                                            <h3>Enter the description of the project. <span className="text-red">*</span></h3>

                                                            <textarea name="" cols="70" rows="10" className="form-control paraAdmin" placeholder="For Example, A 5 marla hourse created by architects of Team over cs Pakistan." value={this.state.disc} onChange={(e) => this.setState({ disc: e.target.value })}></textarea>



                                                            {/* Here the uploaded image will be here */}
                                                            <div>
                                                                <br />
                                                                <h3>Upload Images for the project : <span className="text-red">*</span></h3>
                                                                <MDBProgress value={this.state.progress} className="my-2" height="20px" />
                                                                <label htmlFor="">Upload As many images as you want for project</label>
                                                                <input type="file" className="form-control" multiple onChange={(e) => this.handleUpload(e)} />
                                                                {/* <button className="btn btn-primary uploadBtn mt-3" onClick={(e) => this.testUpload(e)}>Upload</button> */}
                                                                <br />
                                                                <br />
                                                                <h4 className="ColorBloGText border">{this.state.disc}</h4>
                                                                <div className="border">
                                                                    {(false) ? (
                                                                        <div className="text-center">
                                                                            <div className="loader"></div>
                                                                        </div>
                                                                    ) : (
                                                                        <div>

                                                                            {this.state.ImageURLArray.map((v, i) => {
                                                                                return <li key={i} style={{ display: "inline-block", listStyle: "none" }}>
                                                                                    <div>
                                                                                        {/* Here the loop div is here */}
                                                                                        <img width={250} height={250} className="border ml-2 mt-2" src={v} alt={i} />
                                                                                        {/* Here the loop div is here */}
                                                                                    </div>

                                                                                </li>
                                                                            })}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {/* Here the uploaded image will be here */}

                                                            <br />

                                                            <div>
                                                                <h3>Enter the Architects of the project : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Eg: Philip Stejskal Architecture,Ali Imran etc" value={this.state.architects} onChange={(e) => this.setState({ architects: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <div>
                                                                <h3>Enter the Area of the project(m<sup>2</sup>) : <span className="text-red">*</span></h3>
                                                                <input type="number" placeholder="Eg:  200 etc" value={this.state.area} onChange={(e) => this.setState({ area: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <div>
                                                                <h3>Select the date of completion of Project : <span className="text-red">*</span></h3>
                                                                <DatePicker
                                                                    onChange={(val) => this.setState({
                                                                        completionDate: val
                                                                    })}
                                                                    value={this.state.completionDate}
                                                                />
                                                            </div>

                                                            <br />

                                                            <div>
                                                                <h3>Enter the Manufacturers of the project : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Eg: Midland Brick,Barestone, CSR Gyprock, Fielders Prominence etc" value={this.state.manufacturers} onChange={(e) => this.setState({ manufacturers: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <div>
                                                                <h3>Enter the Structural Engineers of the project : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Eg: Andreotta Cardenosa Consulting Engineers etc" value={this.state.StructuralEngineers} onChange={(e) => this.setState({ StructuralEngineers: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <div>
                                                                <h3>Enter the Landscape Architects of the project : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Eg: Annghi Tran Landscape Architecture Studio etc" value={this.state.LandscapeAchitects} onChange={(e) => this.setState({ LandscapeAchitects: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <div>
                                                                <h3>Enter the Project Architects of the project : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Eg: Louise Allen, Julia Kiefer, Jaime Mayger, Philip Stejskal etc" value={this.state.ProjectArchitects} onChange={(e) => this.setState({ ProjectArchitects: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <div>
                                                                <h3>Enter the City where the project is located : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Eg: Louise Allen, Julia Kiefer, Jaime Mayger, Philip Stejskal etc" value={this.state.City} onChange={(e) => this.setState({ City: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <div>
                                                                <h3>Enter the Country where the project is located : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Eg: Louise Allen, Julia Kiefer, Jaime Mayger, Philip Stejskal etc" value={this.state.Country} onChange={(e) => this.setState({ Country: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <div>
                                                                <h3>Enter the Google Map Link where the project is located : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Eg: https://www.google.com/maps?ll=31.476852,74.449119&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=17223166234116770493 etc" value={this.state.GoogleMapLink} onChange={(e) => this.setState({ GoogleMapLink: e.target.value })} className="form-control title" aria-label="..." />
                                                                <br />
                                                                <iframe id="mapAdmin" src={this.state.GoogleMapLink} allowFullScreen loading="lazy" />
                                                            </div>

                                                            {(this.state.title == "" || this.state.category == "" || this.state.disc == "" || this.state.architects == "" || this.state.area == 0 || this.state.manufacturers == "" || this.state.StructuralEngineers == "" || this.state.LandscapeAchitects == "" || this.state.ProjectArchitects == "" || this.state.City == "" || this.state.Country == "" || this.state.GoogleMapLink == "" || this.state.ImageURLArray.length == 0) ? (
                                                                <div>
                                                                    <h4 className="text-red">Please fill all the fields indicated as necessary with * sign to submit</h4>
                                                                    <button disabled={true} className="btn btn-success btn-block">Submit</button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <h4 className="mt-2">You are ready to post the Project.</h4>
                                                                    <button className="btn btn-success btn-block" onClick={this.sendDataProject}>Submit</button>
                                                                </div>
                                                            )}
                                                            <br />
                                                            <div className="text-center">
                                                                <h3 style={{ fontWeight: "lighter" }}>You are successfully logged in</h3>
                                                                <button className="btn btn-danger" onClick={this.sign_out}>Sign Out</button>
                                                                <br />
                                                            </div>
                                                            <br />

                                                        </div>
                                                        <br />
                                                    </div>
                                                    {/* Here the game starts */}
                                                </div>
                                            ) : (
                                                <div>

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="ex2-tabs-2" role="tabpanel" aria-labelledby="ex2-tab-2">
                                        <div className="container border">
                                            <button type="button" className="btn btn-warning btn-rounded btnAddNewProject mt-3">Add New Blog</button>
                                            <br /><br />
                                            {(true) ? (
                                                <div>
                                                    <div className="container admin-container">
                                                        {/* Here the game starts */}
                                                        <div>
                                                            <h1 className="text-inverse mt-3">Upload a Blog : -</h1>
                                                            <br />

                                                            <div>
                                                                <h3>Enter the Title of the Blog : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Enter the title for the blog" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            <h3>Select A Category <span className="text-red">*</span></h3>

                                                            <div className="input-group input-group-md category_select">

                                                                <span className="input-group-addon glyphicon glyphicon-search" id="sizing-addon2"></span>

                                                                <select style={{ fontSize: "15px", width: "200px" }} value={this.state.category}
                                                                    onChange={(e) => this.setCategoryFunction(e)} className="form-control">
                                                                    <option value="3D">3D</option>
                                                                    <option value="Architect">Architect</option>
                                                                    <option value="Construction">Construction</option>
                                                                    <option value="Design">Design</option>
                                                                    <option value="Home Decoration">Home Decoration</option>
                                                                    <option value="Interior">Interior</option>
                                                                    <option value="Landscape">Landscape</option>
                                                                </select>
                                                            </div>
                                                            <br />




                                                            <h3>Write the Blog. <span className="text-red">*</span></h3>

                                                            <div className="d-flex">
                                                                
                                                            </div>

                                                            <textarea name="" cols="70" rows="10" className="form-control paraAdmin" placeholder="Write the Blog Include Images,Videos,etc" value={this.state.disc} onChange={(e) => this.setState({ disc: e.target.value })}></textarea>

                                                            {/* Here the uploaded image will be here */}
                                                            <div>
                                                                <br />
                                                                <h3>Upload the front Image for the Blog : <span className="text-red">*</span></h3>
                                                                <MDBProgress value={this.state.progress} className="my-2" height="20px" />
                                                                <label htmlFor="">Upload A Image that will appear of the front of the Blog</label>
                                                                <input type="file" className="form-control" onChange={(e) => this.handleUpload(e)} />
                                                                {/* <button className="btn btn-primary uploadBtn mt-3" onClick={(e) => this.testUpload(e)}>Upload</button> */}
                                                                <br />
                                                                <br />
                                                                <h4 className="ColorBloGText border">{this.state.disc}</h4>
                                                                <div className="border">
                                                                    {(false) ? (
                                                                        <div className="text-center">
                                                                            <div className="loader"></div>
                                                                        </div>
                                                                    ) : (
                                                                        <div>

                                                                            {this.state.ImageURLArray.map((v, i) => {
                                                                                return <li key={i} style={{ display: "inline-block", listStyle: "none" }}>
                                                                                    <div>
                                                                                        {/* Here the loop div is here */}
                                                                                        <img width={250} height={250} className="border ml-2 mt-2" src={v} alt={i} />
                                                                                        {/* Here the loop div is here */}
                                                                                    </div>

                                                                                </li>
                                                                            })}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {/* Here the uploaded image will be here */}

                                                            <br />

                                                            <div>
                                                                <h3>Enter the Author of the Blog : <span className="text-red">*</span></h3>
                                                                <input type="text" placeholder="Eg: Philip Stejskal Architecture,Ali Imran etc" value={this.state.architects} onChange={(e) => this.setState({ architects: e.target.value })} className="form-control title" aria-label="..." />
                                                            </div>

                                                            <br />

                                                            {(this.state.title == "" || this.state.category == "" || this.state.disc == "" || this.state.architects == "" || this.state.area == 0 || this.state.manufacturers == "" || this.state.StructuralEngineers == "" || this.state.LandscapeAchitects == "" || this.state.ProjectArchitects == "" || this.state.City == "" || this.state.Country == "" || this.state.GoogleMapLink == "" || this.state.ImageURLArray.length == 0) ? (
                                                                <div>
                                                                    <h4 className="text-red">Please fill all the fields indicated as necessary with * sign to submit</h4>
                                                                    <button disabled={true} className="btn btn-success btn-block">Submit</button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <h4 className="mt-2">You are ready to post the Project.</h4>
                                                                    <button className="btn btn-success btn-block" onClick={this.sendDataProject}>Submit</button>
                                                                </div>
                                                            )}
                                                            <br />
                                                            <div className="text-center">
                                                                <h3 style={{ fontWeight: "lighter" }}>You are successfully logged in</h3>
                                                                <button className="btn btn-danger" onClick={this.sign_out}>Sign Out</button>
                                                                <br />
                                                            </div>
                                                            <br />

                                                        </div>
                                                        <br />
                                                    </div>
                                                    {/* Here the game starts */}
                                                </div>
                                            ) : (
                                                <div>

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* <div className="tab-pane fade" id="ex2-tabs-3" role="tabpanel" aria-labelledby="ex2-tab-3">
                            Tab 3 content
                        </div> */}
                                </div>
                                {/* Tabs content */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                            <div className="container text-center">
                                <img width="250px" src={logo} alt="Team Overc’s" />
                                <br /> <br />
                                {/* <label className="form-label">Email Address (required)</label> <br/> */}
                                <input type="email" name="email" placeholder="Email Address" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="form-control adminInput" />
                                <br />
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} className="form-control adminInput" />
                                <br />

                                <a href="" onClick={this.reset_password}>Forgot Password</a>
                                <br />
                                <button className="btn btn-primary btn-login" onClick={this.login}>Login</button>
                                <br />
                                <br />
                                <br />
                            </div>

                        </div>
                    </div>
                )
                }

                <br />
                <br />
                <Footer />
                {/* Projects section */}
            </div >
        )
    }
}

export default Admin;