import React from 'react'
import Pages from "../Pages"

//Array with the app pages and their paths

const ROUTES = [
    { path: "/", key:'root', exact: true, component: (props) => <Pages.Home /> },
    { path: "/public", key:'public', exact: true, component: (props) => <Pages.PublicForum {...props}/>},
    { path: "/public/newThread/", exact: true, key:'newThread', component: (props) => <Pages.CreatePublicThread {...props}/>},
    { path: "/public/:thread", exact: true, key:'publicThread', component: (props) => <Pages.Thread {...props}/>},
    { path: "/public/:thread/:post", exact: true, key:'publicThread', component: (props) => <Pages.Post {...props}/>},
    { path: "/private", key:'private',exact: true, component: (props) => <Pages.PrivateForum {...props}/> },
    { path: "/company", key:'company',exact: true, component: (props) => <Pages.CompanyForum {...props}/>}
    
  ];
  
export default ROUTES;
  