import React, { Component, lazy,Suspense } from "react";

import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Loading from "../src/components/pages/Loading";
import Footer from "../src/components/Footer/Footer";
import NotFound from "../src/components/pages/NotFound";
import ScrollToTop from "../src/components/pages/ScrollToTop";
const Home = lazy(() => import("./components/pages/Home"));
const ContactUs = lazy(() => import("../src/components/pages/Contactus"));
const AboutUs = lazy(() => import("../src/components/pages/AboutUs"));
// const City = lazy(() => import("./components/pages/City"));


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
      <ScrollToTop />
      
      <Suspense fallback={<Loading />}>
    
      <NavBar />

      
        <div style={{ marginTop: "60px" }}>
        <Switch>
          {/* <Route exact path="/" render={<Home />} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={ContactUs}/>
          <Route exact path="/about-us" component={AboutUs}/>
          {/* <Route exact path="/city" component={City}/> */}
          <Route path="*" component={NotFound} />
        </Switch>
        </div>
        <Footer />
        </Suspense>
        
      </Router>
      </div>
    );
  }
}

export default App;
