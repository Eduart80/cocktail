import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//pages
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import SingleCoctail from "../src/Pages/SingleCoctail";
import Error from "../src/Pages/Error";
//Components
import Navbar from "../src/Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCoctail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
