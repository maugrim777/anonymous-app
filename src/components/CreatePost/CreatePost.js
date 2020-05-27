import React from 'react';
import "./createPost.css"




function CreatePost({handleNewPost, newPost, savePost, handlePostInput, handlePostDelete}) {

    return(
        <div className='createPost-container'>
            {newPost 
                ? <div id='newPostForm' >
                    <input id='newPost' name='title' type='text' placeholder='new post' onChange={handlePostInput} />
                    <input id='deletePassword' name='deletePost' type='password' placeholder='delete password' onChange={handlePostDelete}/>
                    <div id='options'>
                        <button id='createPost' onClick={savePost}>Save</button>  
                        <button id='createPost' onClick={handleNewPost} >Cancel</button>  
                    </div>
                  </div>  
                : <button id='newPostButton' onClick={handleNewPost}>New Post</button>

            }
        </div>
    )
   
    
}

export default CreatePost