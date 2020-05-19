import React from 'react'
import Landing from "../../pages/Landing/Landing"
import CompanyChannelLanding from "../../pages/CompanyChannel/CompanyChannelLanding"
import PublicChannelLanding from "../../pages/PublicChannel/PublicChannelLanding"
import PrivateChannelLanding from "../../pages/PublicChannel/PublicChannelLanding"
import CreatePublicTopic from "../../pages/CreatePublicTopic/CreatePublicTopic"

//Array with the app pages and their paths

const ROUTES = [
    { path: "/", key:'root', exact: true, component: () => <Landing /> },
    { path: "/public", key:'public', exact: true, component: (props) => <PublicChannelLanding {...props}/>},
    { path: "/public/newTopic", key:'newTopic',exact: true, component: (props) => <CreatePublicTopic {...props}/>},
    { path: "/private", key:'private',exact: true, component: (props) => <PrivateChannelLanding {...props}/> },
    { path: "/company", key:'company',exact: true, component: (props) => <CompanyChannelLanding {...props}/>}
    
  ];
  
export default ROUTES;
  