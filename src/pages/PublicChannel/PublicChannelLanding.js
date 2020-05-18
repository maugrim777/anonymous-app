import React from 'react'
import "./publicChannelLanding.css"
import Logo from "../../components/Logo/Logo"
import ParticlesJS from "../../components/Particles/Particles"
import "./searchButton.css"

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
                        <h1>Welcome to the Anonymous Public Channel!</h1>
                        <h2> Please select a discussion channel from the list below:</h2>
                        <div className="search-container">
                            <input type="text" placeholder="Search..." />
                            <div className="search"></div>
                        </div>
                        <ul id='channel-list'>
                            <li className='channel'>channel1</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channel452523</li>
                            <li className='channel'>channsfgjysfkgjdskfksdjfgsdel1</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channel452523</li>
                            <li className='channel'>channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>1channel452523</li>
                            <li className='channel'>1channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>1channel23</li>
                            <li className='channel'>1channel4234</li>
                            <li className='channel'>1channel34523</li>
                            <li className='channel'>1channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channel452523</li>
                            <li className='channel'>channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>1channel452523</li>
                            <li className='channel'>1channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>1channel23</li>
                            <li className='channel'>1channel4234</li>
                            <li className='channel'>1channel34523</li>
                            <li className='channel'>1channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channel452523</li>
                            <li className='channel'>channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>1channel452523</li>
                            <li className='channel'>1channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>1channel23</li>
                            <li className='channel'>1channel4234</li>
                            <li className='channel'>1channel34523</li>
                            <li className='channel'>1channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>1channel34523</li>
                            <li className='channel'>1channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channel452523</li>
                            <li className='channel'>channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>1channel452523</li>
                            <li className='channel'>1channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>1channel23</li>
                            <li className='channel'>1channel4234</li>
                            <li className='channel'>1channel34523</li>
                            <li className='channel'>1channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>1channel34523</li>
                            <li className='channel'>1channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channel452523</li>
                            <li className='channel'>channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>channel23</li>
                            <li className='channel'>channel4234</li>
                            <li className='channel'>channel34523</li>
                            <li className='channel'>channelddfbsjhfbsjfbsdjgv452523</li>
                            <li className='channel'>1channel452523</li>
                            <li className='channel'>1channegdsgdsjfgsjkfskbdsl1</li>
                            <li className='channel'>1channel23</li>
                            <li className='channel'>1channel4234</li>
                            <li className='channel'>1channel34523</li>
                            <li className='channel'>1channelddfbsjhfbsjfbsdjgv452523</li>
                        </ul>
                        <button id='create-channel'>Create New Discussion Channel</button>
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