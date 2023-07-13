import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("success", "Dark Mode Enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Enabled");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (typeOfAlert, msgOfAlert) => {
    setAlert({
      type: typeOfAlert,
      msg: msgOfAlert,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
    <Router>
      <Navbar link="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm
              heading="Enter your views"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
