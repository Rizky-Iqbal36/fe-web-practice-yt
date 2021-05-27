import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <NavBar />
      <SideBar />
    </Router>
  );
}

export default App;
