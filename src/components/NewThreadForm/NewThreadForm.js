import React from 'react';
import "./newThreadForm.css"



function NewThreadForm({threadState,handleOK, handleSubmit, handleReset}) {

    switch(threadState) {
        case 'success': return (
                        <form id='newThreadForm'>
                            <h2 className='alert'>New thread Successfully created!</h2>
                            <button id='createThread' type='submit' onClick={handleOK}>OK</button>
                        </form>
                    ); 
        case 'error': return (
                        <div id='newThreadForm' >
                            <h2 className='alert'>There was an error creating the thread!</h2>
                            <button id='createThread' onClick={handleReset}>OK</button>  
                        </div>  
                    ); 
        default: return (  
                    <form  onSubmit={handleSubmit} id='newThreadForm' >
                        <input id='newThread' name='title' type='text' placeholder='new thread' autoFocus='autofocus'/>
                        <input id='deletePassword' name='deleteThread' type='password' placeholder='delete password'/>
                        <button id='createThread' type='submit'>Create Thread</button>  
                    </form>      

                )
    }
    
    
}

export default NewThreadForm