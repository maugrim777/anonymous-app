import React from 'react'
import "./publicChannelLanding.css"
import Logo from "../../components/Logo/Logo"
import ParticlesJS from "../../components/Particles/Particles"


class PublicChannelLanding extends React.Component{
    constructor(){
        super()
        this.state = {
            channelSelect: ''
        }
    }

    render(){
        return(
            <div className='container'>
                <ParticlesJS />
                <div id='overlay'>
                    {/* <div id='space-top'></div> */}
                        <h1>Site in Construction</h1>
                    <div id='landing-footer'>
                            <Logo />
                            &copy; Copyright - Gabriel Vlasceanu - All Rights Reserved.
                    </div>
                </div>
                
            </div>
        )
    }


}

export default PublicChannelLanding