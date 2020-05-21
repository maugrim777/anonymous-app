import React from 'react'
import Particles from 'react-particles-js';
import particlesOptions from './particles.json'
import './particles.css'
 

 
function ParticlesJS() {
    return(
        <Particles params={particlesOptions} />
    )
}

export default ParticlesJS