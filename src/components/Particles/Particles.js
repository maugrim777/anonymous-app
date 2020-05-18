import React from 'react'
import Particles from 'react-particles-js';
import particlesOptions from './particles.json'
 

 
function ParticlesJS() {
    return(
        <div id='particles'>
            <Particles params={particlesOptions} />
        </div>
    )
}

export default ParticlesJS