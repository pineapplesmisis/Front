import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./components/NavBarComp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPage from "./ProductPage";
import Home from "./Home";
import Profile from "./Profile";
import ProductById from "./ProductById";
import ProductByIdPage from "./ProductByIdPage";
import PossibleProducts from "./PossibleProduct";
import AboutUs from "./AboutUs";

const LOCAL_STORAGE_KEY = "savedData.data";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "#fcfeff";
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (stored) setData(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBarComp />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product">
              <ProductPage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/product/:id" render={(props) => <><ProductByIdPage {...props} /> </>}/>
            <Route exact path="/about">
              <AboutUs/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
