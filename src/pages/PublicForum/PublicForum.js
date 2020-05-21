import React from 'react'
import Components from '../../components/Components'
import "./publicForum.css"


class PublicForum extends React.Component{
    
    newTopic = () => {
        this.props.history.push('/public/newTopic')
    }

    render(){
        return(
            <div>
                <Components.ParticlesJS />              
                <div className='publicForum-container'>
                    <Components.PageTitle pageTitle='Welcome to the Public Forum' id='pageTitle' />
                    <Components.TopicSelect id='topicSelect'/>
                    <button id='create-channel' onClick={this.newTopic}>Create New Discussion Topic</button>
                    <Components.Footer />
                </div>
            </div>
            
        )
    }
}

export default PublicForum