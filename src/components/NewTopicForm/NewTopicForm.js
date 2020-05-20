import React from 'react';
import "./newTopicForm.css"


function NewTopicForm({channel}) {
    return(
        <form id='newTopicForm'>
            <input id='newTopic' type='text' placeholder='new topic' />
            <input id='deletePassword' type='password' placeholder='delete password' />
            <button id='createTopic'>Create Topic</button>  
        </form>
       
    )
}

export default NewTopicForm