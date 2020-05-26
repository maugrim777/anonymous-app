import React from 'react'
import Components from '../../components/Components'
import "./thread.css"


class Thread extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            threadID : this.props.match.params.thread,
            thread: ''
        }

    }

    componentDidMount() {
        const url = `https://agora-api-maugrim777.herokuapp.com/public/${this.state.threadID}`
        // `http://localhost:3000/public/${this.state.threadID}`||url
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({thread: data})})
            .catch(err => console.log(err))
    }

    render(){
        console.log(this.props.match.params.thread)
      return(
            <div>
                <Components.ParticlesJS />              
                <div className='publicForum-container'>
                    <Components.PageTitle pageTitle={`Welcome to the ${this.state.thread.title} thread!`} id='pageTitle' />
                    
                    <Components.Footer />
                </div>
            </div>        
        )
    }
}

export default Thread