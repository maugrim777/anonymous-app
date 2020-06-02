import React from 'react'
import Components from '../../components/Components'
import "./post.css"
// import bcrypt from 'bcryptjs'

const url = process.env.NODE_ENV==='production' ? 'https://agora-api-maugrim777.herokuapp.com' : 'http://localhost:3000' 

class Post extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            threadID: this.props.match.params.thread,
            postID: this.props.match.params.post,
            post: {}
        }
    
    }


    componentDidMount() {
        
        console.log('url is: ', url)
        fetch(url+`/public/${this.state.threadID}/${this.state.postID}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.setState({post: data.response, thread: data.thread })
            })
            .catch(err => console.log(err))
    }

    handleMasterPass = (event) => {
        event.target.parentNode.children[1].value = window.localStorage.getItem('masterPassword' || alert('No Master Password Set'))
    }

    render(){

      return(
            <div>
                <Components.ParticlesJS />
                    {this.state.thread 
                        ? <div className='container'>
                            <Components.TopNav history={this.props.history}/>
                            <Components.PageTitle pageTitle={`${this.state.thread.title}, Post ID: ${this.state.post[0]._id}`} id='pageTitle' />
                            <Components.DisplayOnePost post={this.state.post[0]} handleMasterPass={this.handleMasterPass}/>
                        </div>      
                        : <div className='container'> 
                                <h1>Loading Post</h1>
                        </div>
                    }
            </div>
              
        )
    }
}

export default Post