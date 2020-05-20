import React from 'react'
import Components from '../../components/Components'
import "./publicForum.css"


class PublicForum extends React.Component{
    
    render(){
        return(
            <div>
                <Components.ParticlesJS />              
                <div className='publicForum-container'>
                    <Components.PageTitle pageTitle='Welcome to the Public Forum' id='title' />
                    <Components.TopicSelect id='topicSelect'/>
                    <Components.Footer />
                </div>
            </div>
            
        )
    }
}

export default PublicForum