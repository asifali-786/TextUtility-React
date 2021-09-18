import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert1 from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [Alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";

      setInterval(() => {
        document.title = "TextUtils is Amazing mode";
      }, 800);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 700);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";

      // setInterval(() => {
      //   document.title = "Dark TextUtils is Amazing mode"
      // }, 600);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now in Dark Mode"
      // }, 500);
    }
  };

  return (
    // <Router>
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert1 alert={Alert}></Alert1>

      {/* <Switch>
          <Route path="/about">
            <About/>
          </Route>
          
           <Route path="/">  */}
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
      </div>
    </>
  );
}
export default App;
