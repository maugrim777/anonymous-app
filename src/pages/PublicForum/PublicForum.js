import React from 'react'
import Components from '../../components/Components'
import "./publicForum.css"


class PublicForum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            threads : []
        }

    }


    componentDidMount() {
        const url = 'https://agora-api-maugrim777.herokuapp.com/public/getThreads'
        // 'http://localhost:3000/public/getThreads' || url
        fetch(url)
            .then(response =>  response.json())
            .then(data => this.setState({threads: data}))
        
        
    }


    newTopic = () => {
        this.props.history.push('/public/newTopic')
    }



    render(){
        return(
            <div>
                <Components.ParticlesJS />              
                <div className='publicForum-container'>
                    <Components.PageTitle pageTitle='Welcome to the Public Forum' id='pageTitle' />
                    <Components.ThreadSelect threads={this.state.threads} id='threadSelect'/>
                    <button id='create-channel' onClick={this.newTopic}>Create New Thread</button>
                    <Components.Footer />
                </div>
            </div>
            
        )
    }
}

export default PublicForum