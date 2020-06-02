import React from 'react'
import "./createPublicThread.css"
import Components from "../../components/Components"
const bcrypt =require('bcryptjs') 

const url = process.env.NODE_ENV==='production' ? 'https://agora-api-maugrim777.herokuapp.com' : 'http://localhost:3000' 


class CreatePublicThread extends React.Component{
    constructor(props) {
        super(props);
        this.state = {threadState: false}
    }

    handleReset = () => {
        this.setState({threadState: ''})
    }

    
    handleOK = (event) => {
        event.preventDefault()
        console.log('hit')
        console.log(event.target.innerHTML)
        if (event.key === 'Enter' || event.target.innerHTML==='OK') {
            window.removeEventListener('keydown', this.handleOK)
            this.props.history.push('/public')
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = []
        for (const pair of new FormData(event.target)) {               
            data.push(pair[0],pair[1])
        }
        const title = data[1]
        const deleteThread = data[3]

        if (!title || !deleteThread) {
            alert('Thread Title or Delete Password Cannot be empty!')
        }   else {
            const hash = bcrypt.hashSync(deleteThread, 10)
            fetch(url + '/newThread' , {
                'method': "POST", 
                'body': JSON.stringify({
                        forum: 'public',
                        title: title,
                        deleteThread: hash
                }),
                'headers': {
                    "Content-Type": "application/json"
                }
            })
                .then(response =>  response.json())
                .then(resp => {
                    this.setState({threadState: 'success'})
                    window.addEventListener('keydown', this.handleOK)
                })
                .catch(err => this.setState({threadState: 'error'}))
        }     
    }

    handleMasterPass = () => {
        if (window.localStorage.getItem('masterPassword')) {
            document.getElementById('deletePassword').value=window.localStorage.getItem('masterPassword')
        } else {
            alert('No Master Password Set')
        }
        
    }

    render(){
        return(
            <div>
                <Components.ParticlesJS />
                <div className='createPublicThread-container container'>
                    <Components.PageTitle pageTitle="Create New Public Forum Thread" />
                    <Components.NewThreadForm 
                        threadState={this.state.threadState} 
                        handleSubmit={this.handleSubmit} 
                        handleReset={this.handleReset}
                        handleOK={this.handleOK}
                        handleMasterPass={this.handleMasterPass} />
                    <Components.Footer />
                </div>
            </div>          
        )
    }
}


export default CreatePublicThread;