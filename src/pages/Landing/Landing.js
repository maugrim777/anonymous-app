import React from 'react'
import "./landing.css"
import Logo from "../../components/Logo/Logo"
import ParticlesJS from "../../components/Particles/Particles"
import ButtonStroke from "../../components/ButtonStroke/ButtonStroke"


class Landing extends React.Component{
    
    render(){
        return(
            <div className='container'>
                <ParticlesJS />
                <div id='overlay'>
                    <div id='space-top'></div>
                        <h1>Welcome to the Agora</h1>
                        <h2>No names, no faces, just free discussions and ideas</h2>
                            <ButtonStroke />
                    <div id='landing-footer'>
                            <Logo />
                            &copy; Copyright - Gabriel Vlasceanu - All Rights Reserved.
                    </div>
                </div>
                
            </div>
        )
    }


}

export default Landing