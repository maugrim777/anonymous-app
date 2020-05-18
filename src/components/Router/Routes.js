import React from 'react'
import Landing from "../../pages/Landing/Landing"
import CompanyChannelLanding from "../../pages/CompanyChannel/CompanyChannelLanding"
import PublicChannelLanding from "../../pages/PublicChannel/PublicChannelLanding"
import PrivateChannelLanding from "../../pages/PublicChannel/PublicChannelLanding"

//Array with the app pages and their paths

const ROUTES = [
    { path: "/", key:'root', exact: true, component: () => <Landing /> },
    { path: "/public", key:'public', exact: true, component: () => <PublicChannelLanding />},
    { path: "/private", key:'private',exact: true, component: () => <PrivateChannelLanding /> },
    { path: "/company", key:'company',exact: true, component: () => <CompanyChannelLanding />}
  ];
  
export default ROUTES;
  