import React from 'react'
import Components from '../../components/Components'
import "./thread.css"
import bcrypt from 'bcryptjs'

const url = process.env.PORT ? 'https://agora-api-maugrim777.herokuapp.com' : 'http://localhost:3000' 

class Thread extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            threadID : this.props.match.params.thread,
            thread: '',
            deleteThread: false,
            delThreadPass: false,
            deleteThreadPassword: '',
            newPost: false,
            postInput: '',
            postDelete: '',
            posts: []
        }

    }


    componentDidMount() {
        
        fetch(url+`/public/${this.state.threadID}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({thread: data, posts:data.posts})})
            .catch(err => console.log(err))
    }

    toggleDeleteThread = () => {
        this.setState({deleteThread: !this.state.deleteThread})
        this.setState({delThreadPass: false})
    }

    toggleDelThreadPass = () => {
        this.setState({delThreadPass: !this.state.delThreadPass})
    }

    handleDeleteThreadPasswordInput = (event) => {
        this.setState({deleteThreadPassword: event.target.value})
    }

    handleDeleteThread = () => {

        if (!this.state.deleteThreadPassword) {return alert('Thread Delete Password cannot be empty!')}


        fetch(url+`/public/${this.state.threadID}/delete`, {
            'method': "DELETE",
            'body': JSON.stringify({
                deleteThread: this.state.deleteThreadPassword
            }),
            'headers': {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                
                if (data === 'success') {
                    window.alert('Thread was successfully deleted!')
                    window.location.href = '/public'
                    
                } else if (data === 'incorrect') {
                    alert('Incorrect password!')
                } else {
                    alert('There was a problem deleting the thread!')
                }
                console.log(data)
                    
            })
            .catch(err => console.log(err))
    }

    handleNewPost = () => {
        this.setState({newPost: !this.state.newPost})
    }

    handlePostInput = (event) => {
        console.log(event.target.value)
        this.setState({postInput: event.target.value})
    }

    handlePostDelete = (event) => {
        console.log(event.target.value)
        this.setState({postDelete: event.target.value})
    }

    savePost = () => {
        console.log('postinput: ', this.state.postInput)
        console.log('postdelete: ', this.state.postDelete)

        const hash = bcrypt.hashSync(this.state.postDelete, 10)

        fetch(url+`/public/${this.state.threadID}/newPost`, {
            method: 'POST',
            body: JSON.stringify({
                content: this.state.postInput,
                deletePass: hash
            }),
            'headers': {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }



    render(){
        console.log(this.state.posts)
      return(
            <div>
                <Components.ParticlesJS />              
                <div className='thread-container'>
                    <Components.PageTitle pageTitle={`Welcome to the ${this.state.thread.title} thread!`} id='pageTitle' />
                    
                    {this.state.deleteThread
                        ? this.state.delThreadPass
                            ?   <div id='delThreadConfirmation' >
                                    
                                    <input type="password" id='deletePassword' placeholder='Please Enter the Thread delete Password' onChange={this.handleDeleteThreadPasswordInput}/>
                                    <div id='options'>
                                        <button id='delThread' onClick={this.handleDeleteThread} >Delete Thread</button>  
                                    </div>
                                </div> 
                            :   <div id='delThreadConfirmation' >
                                    <h2 className='alert'>Are you sure you want to delete the {this.state.thread.title} thread and all it's content?</h2>
                                    <div id='options'>
                                        <button id='delThread' onClick={this.toggleDeleteThread} >No</button>  
                                        <button id='delThread' onClick={this.toggleDelThreadPass}>Yes</button>  
                                    </div>
                                </div>  
                        : <div className='posts-container'>
                            <Components.CreatePost 
                                handleNewPost={this.handleNewPost} 
                                newPost={this.state.newPost} 
                                savePost={this.savePost} 
                                handlePostInput={this.handlePostInput}
                                handlePostDelete={this.handlePostDelete}
                            />
                            <h1>Discussion Topics will go here</h1>
                            </div>
                    }      
                    <Components.Footer thread={true} toggleDeleteThread={this.toggleDeleteThread}/>
                </div>
            </div>        
        )
    }
}

export default Thread