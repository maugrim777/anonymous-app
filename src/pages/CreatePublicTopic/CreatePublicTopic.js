import React from 'react'
import "./createPublicTopic.css"
// import Logo from "../../components/Logo/Logo"
// import ParticlesJS from "../../components/Particles/Particles"
import PageTitle from "../../components/PageTitle/PageTitle"
import NewTopicForm from "../../components/NewTopicForm/NewTopicForm"
import Footer from "../../components/Footer/Footer"
import ParticlesJS from "../../components/Particles/Particles"




class CreatePublicTopic extends React.Component{
    

    render(){
        

        return(
            <div>
                <ParticlesJS />
                <div className='createPublicTopic-container'>
                    <PageTitle pageTitle="Create New Public Forum Topic" />
                    <NewTopicForm />
                        <Footer />
                </div>
            </div>
            
        )
    }


}


export default CreatePublicTopic;