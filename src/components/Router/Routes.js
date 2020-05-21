import React from 'react'
import Pages from "../Pages"

//Array with the app pages and their paths

const ROUTES = [
    { path: "/", key:'root', exact: true, component: (props) => <Pages.Home /> },
    { path: "/public", key:'public', exact: true, component: (props) => <Pages.PublicForum {...props}/>},
    { path: "/public/newTopic", key:'newTopic',exact: true, component: (props) => <Pages.CreatePublicTopic {...props}/>},
    { path: "/private", key:'private',exact: true, component: (props) => <Pages.PrivateChannelLanding {...props}/> },
    { path: "/company", key:'company',exact: true, component: (props) => <Pages.CompanyChannelLanding {...props}/>}
    
  ];
  
export default ROUTES;
  