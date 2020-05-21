import React from 'react'
import "./createPublicThread.css"
// import PageTitle from "../../components/PageTitle/PageTitle"
// import NewTopicForm from "../../components/NewTopicForm/NewTopicForm"
// import Footer from "../../components/Footer/Footer"
// import ParticlesJS from "../../components/Particles/Particles"
import Components from "../../components/Components"

import CreateThread from "../../services/CreateThread"

class CreatePublicThread extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            threadCreated: false
        }

        this.createThread = CreateThread
    }



    render(){
        console.log(this.createThread)


        return(
            <div>
                <Components.ParticlesJS />
                <div className='createPublicThread-container'>
                    <Components.PageTitle pageTitle="Create New Public Forum Thread" />
                    <Components.NewThreadForm action={this.createThread}/>
                    <Components.Footer />
                </div>
            </div>          
        )
    }
}


export default CreatePublicThread;