import React from 'react'
import Components from '../../components/Components'
import "./home.css"


class Home extends React.Component{
    
    render(){
        return(
            <div>
                <Components.ParticlesJS />              
                <div className='homePage-container'>
                    <Components.PageTitle pageTitle='Welcome to the Agora' id='pageTitle' />
                    <Components.ForumSelect id='selection'/>
                    <Components.Footer />
                </div>
            </div>
            
        )
    }
}

export default Home