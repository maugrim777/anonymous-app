import React from 'react'
import Components from '../../components/Components'
import "./privateForum.css"

// const url = process.env.NODE_ENV==='production' ? 'https://agora-api-maugrim777.herokuapp.com' : 'http://localhost:3000'

class PrivateForum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            threads : [],
            search: '',
            searchedThreads: []
        }

    }


    
  
    render(){
        
        

        return(
            <div>
                <Components.ParticlesJS />              
                <div className='privateForum-container container'>
                    <Components.TopNav history={this.props.history}/>
                    <Components.PageTitle pageTitle='Site under construction' id='pageTitle' />
                    <Components.Footer />
                </div>
            </div>
            
        )
    }
}

export default PrivateForum;