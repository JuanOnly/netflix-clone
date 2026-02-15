import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <HomeScreen />
        </Route>
      </Router>
    </div>
  );
}

export default App;
