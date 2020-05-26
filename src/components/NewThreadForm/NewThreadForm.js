import React from 'react';
import "./newThreadForm.css"



function NewThreadForm({threadState,handleTitle, handleDelete, handleSubmit, handleReset}) {

    switch(threadState) {
        case 'success': return (
                        <div id='newThreadForm' >
                            <h2 className='alert'>New thread Successfully created!</h2>
                            <a href='/public'><button id='createThread'>OK</button></a>  
                        </div>
                    ); 
        case 'empty': return (
                        <div id='newThreadForm' >
                            <h2 className='alert'>Thread Title or Delete Password Cannot be empty!</h2>
                            <button onClick={handleReset} id='createThread'>OK</button>  
                        </div>
                    ); 
        case 'error': return (
                        <div id='newThreadForm' >
                            <h2 className='alert'>There was an error creating the thread!</h2>
                            <button id='createThread' onClick={handleReset}>OK</button>  
                        </div>  
                    ); 
        default: return (  
                    <div id='newThreadForm' >
                        <input id='newThread' name='title' type='text' placeholder='new thread' onChange={handleTitle}/>
                        <input id='deletePassword' name='deleteThread' type='password' placeholder='delete password' onChange={handleDelete}/>
                        <button id='createThread' onClick={handleSubmit}>Create Thread</button>  
                    </div>        
                )
    }
    
    
}

export default NewThreadForm