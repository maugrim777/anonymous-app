import React from 'react'
import Components from '../../components/Components'
import "./publicForum.css"

const url = process.env.NODE_ENV==='production' ? 'https://agora-api-maugrim777.herokuapp.com' : 'http://localhost:3000'

class PublicForum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            threads : [],
            search: '',
            searchedThreads: []
        }

    }


    componentDidMount() {


        console.log('url is: ', url)

        console.log(process.env.NODE_ENV)
        fetch(url + '/public/getThreads')
            .then(response =>  response.json())
            .then(data => {
                this.setState({threads: data, searchedThreads: data})})
            .catch(err => {
                this.setState({threads: 'error'})})
        
        
    }


    newThread = () => {
        this.props.history.push('/public/newThread')
    }

    handleSearch = (event) => {
        this.setState({search: event.target.value})
    }

    goToThread = (e) => {
        const threadID = e.target.dataset.id
        this.props.history.push(`/public/${threadID}`)
    }
  
    render(){
        
        let filtered = this.state.threads

        if (this.state.search) {
            filtered = this.state.threads.filter( thread => thread.title.toLowerCase().includes(this.state.search))
        }

        return(
            <div>
                <Components.ParticlesJS />              
                <div className='publicForum-container container'>
                    <Components.PageTitle pageTitle='Welcome to the Public Forum' id='pageTitle' />
                    {this.state.threads==='error'
                    ?<h1>Ooops! There was an error retrieving the threads!</h1>
                    :<Components.ThreadSelect threads={filtered} handleSearch={this.handleSearch} goToThread={this.goToThread} id='threadSelect'/>}
                    
                    <button id='create-channel' onClick={this.newThread}>Create New Thread</button>
                    <Components.Footer />
                </div>
            </div>
            
        )
    }
}

export default PublicForum