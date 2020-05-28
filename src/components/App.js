import React from "react";
import ROUTES from "./Router/Routes"
import Router from "./Router/Router"
import './app.css'


// App imports the ROUTES component = an array of all pages and their respective routes and passes the array to the Router component

function App() {
  return (
    <div>
        <Router routes={ROUTES} />
    </div>
  );
}

export default App;