import React from 'react';
import "./newThreadForm.css"

import CreateThread from "../../services/CreateThread"

function handleCreate(event) {
    CreateThread(event, 'public')
}

function NewThreadForm({action}) {
    console.log(action)
    return(
        <form id='newThreadForm' onSubmit={handleCreate}>
            <input id='newThread' name='title' type='text' placeholder='new thread' />
            <input id='deletePassword' name='deleteThread' type='password' placeholder='delete password' />
            <button id='createThread'>Create Thread</button>  
        </form>
       
    )
}

export default NewThreadForm