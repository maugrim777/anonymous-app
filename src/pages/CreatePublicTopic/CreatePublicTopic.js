import React from 'react'
import "./createPublicTopic.css"
import Logo from "../../components/Logo/Logo"
import ParticlesJS from "../../components/Particles/Particles"




class PublicChannelLanding extends React.Component{
    

    render(){
        

        return(
            <div className='container'>
                <ParticlesJS />
                <div id='overlay'>
                        <h1>Create New Public Topic</h1>
                        {/* <h2> Please select a discussion topic from the list below:</h2> */}
                        {/* <div className="search-container">
                            <input type="text" placeholder="Search..." />
                            <div className="search"></div>
                        </div> */}
                        {/* <ul id='channel-list'>
                            <li className='channel'>topic1</li>
                            <li className='channel'>topic2</li>
                            <li className='channel'>topic3</li>
                            <li className='channel'>topic4</li>
                            <li className='channel'>topic5</li>
                        </ul> */}
                        {/* <button id='create-channel' onClick={this.newTopic}>Create New Discussion Topic</button> */}
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