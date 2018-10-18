import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Store from "./components/Store/Store";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/gallery" render={props => <Gallery {...props} />} />
        <Route exact path="/store" render={props => <Store {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
      </div>
    );
  }
}

export default App;