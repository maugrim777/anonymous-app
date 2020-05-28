import React from 'react'
import "./createPublicThread.css"
import Components from "../../components/Components"
const bcrypt =require('bcryptjs') 

const url = process.env.NODE_ENV==='production' ? 'https://agora-api-maugrim777.herokuapp.com' : 'http://localhost:3000' 


class CreatePublicThread extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            threadState: false,
            title: '',
            deleteThread: '',
        }

    }

    handleTitle = (event) => {
        this.setState({title:event.target.value})
    }

    handleDelete = (event) => {
        this.setState({deleteThread:event.target.value})
    }

    handleReset = () => {
        this.setState(
            {threadState: '',
            title: '',
            deleteThread: ''}
        )
    }

    handleKeyPress = (event) => {
        console.log(event.key)
        if (event.key==='Enter' && this.state.threadState) {this.handleReset()}
    }

    handleSubmit = () => {

        if (!this.state.title || !this.state.deleteThread) {
            this.setState({threadState: 'empty'})
        } else {
            
            const hash = bcrypt.hashSync(this.state.deleteThread, 10)

            console.log('url is: ', url)

            fetch(url + '/newThread' , {
                'method': "POST", 
                'body': JSON.stringify({
                        forum: 'public',
                        title: this.state.title,
                        deleteThread: hash
                }),
                'headers': {
                    "Content-Type": "application/json"
                }
            })
                .then(response =>  response.json())
                .then(resp => {
                    this.setState({threadState: 'success'})})
                .catch(err => this.setState({threadState: 'error'}))
        }
    }

    render(){
        return(
            <div>
                <Components.ParticlesJS />
                <div className='createPublicThread-container container'>
                    <Components.PageTitle pageTitle="Create New Public Forum Thread" />
                    <Components.NewThreadForm threadState={this.state.threadState} handleTitle={this.handleTitle} handleDelete={this.handleDelete} handleSubmit={this.handleSubmit} handleReset={this.handleReset}/>
                    <Components.Footer />
                </div>
            </div>          
        )
    }
}


export default CreatePublicThread;