import React from 'react'
import Components from '../../components/Components'
import "./publicForum.css"

const url = process.env.PORT ? 'https://agora-api-maugrim777.herokuapp.com' : 'http://localhost:3000'

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

        console.log(process.env.PORT)
        // let url =''
        //     if (process.env.PORT) {
        //         url = 'https://agora-api-maugrim777.herokuapp.com/public/getThreads'
        //     } else {
        //         url = 'http://localhost:3000/public/getThreads'
        //     }
            console.log('url is: ', url)
        // const url = 'https://agora-api-maugrim777.herokuapp.com/public/getThreads'
        // 'http://localhost:3000/public/getThreads' || url
        fetch(url + '/public/getThreads')
            .then(response =>  response.json())
            .then(data => {
                console.log(data)
                this.setState({threads: data, searchedThreads: data})})
            .catch(err => {
                console.log(err)
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

        console.log('filtered:' ,filtered)
        return(
            <div>
                <Components.ParticlesJS />              
                <div className='publicForum-container'>
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