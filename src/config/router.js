import React from "react"
import { BrowserRouter as Router, Route  } from "react-router-dom";

import Home from '../Containers/Home/index';
import AboutUsPage from '../Containers/About/AboutUsPage';
import Services from '../Containers/Services/Services';
import Projects from '../Containers/Projects/Projects';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={AboutUsPage} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/projects" component={Projects} />
            </Router>
        )
    }
}
export default AppRouter;