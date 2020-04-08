import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import Nav from './components/Nav.js'

class App extends React.Component {
  render() {
    return (
        <Router>
         <div className="container">
           <Nav />
           <Route path='/' exact component={Home} />
           <Route path='/about' component={About}/>
           <Route path='/contact' component={Contact}/>
         </div>
       </Router>
    );
  }
}

export default App;
