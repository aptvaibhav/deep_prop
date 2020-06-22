import React, { Component, lazy,Suspense } from "react";

import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Loading from "../src/components/pages/Loading";
import Footer from "../src/components/Footer/Footer";
const Home = lazy(() => import("./components/pages/Home"));
const ContactUs = lazy(() => import("../src/components/pages/Contactus"));
const AboutUs = lazy(() => import("../src/components/pages/AboutUs"));

class App extends Component {

  render() {
    console.log("%cSTOP!", "font-size: 50px; color: red");
    console.log(
      "%cThis is ah browser feature intended for developers. If someone told you to copy-paste something here, it is a scam.",
      "font-size: 20px;"
    );
    return (
      <div>
      <Router>
      <Suspense fallback={<Loading />}>
      <div className="navBarPosition">
        <NavBar />
        </div>
        <div style={{ marginTop: "60px" }}>
        <Switch>
          {/* <Route exact path="/" render={<Home />} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={ContactUs}/>
          <Route exact path="/about-us" component={AboutUs}/>
        </Switch>
        </div>
        </Suspense>
        <Footer />
      </Router>
      </div>
    );
  }
}

export default App;
