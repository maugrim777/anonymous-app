import React from 'react'
import { Route, Switch } from "react-router-dom";

//Router component receives an array of routes from App, creates a Route element for each member in array and switches between pages

function Routing(route) {
    return(
        <Route 
            path={route.path}
            exact={route.exact}
            key={route.key}
            component={route.component}
        />
    )
}

function Router({ routes }) {
    
    return (
      <Switch>
        {routes.map((route,i) => Routing(route))}
        <Route component={() => <h1>Page Not Found!</h1>} />
      </Switch>
    );
  }

export default Router