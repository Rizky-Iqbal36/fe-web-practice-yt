import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import Home from "./pages";
import IndonesiPage from "./pages/indonesia";

import { HomeObj } from "./components/InfoSection/data";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} HomeObj={HomeObj} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/indonesia" component={IndonesiPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
