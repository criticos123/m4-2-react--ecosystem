import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
