import React from 'react';
import "./createPost.css"




function CreatePost({handleNewPost, newPost, savePost, handlePostInput, handlePostDelete}) {

    return(
        <div className='createPost-container'>
            {newPost 
                ? <div id='newPostForm' >
                    <input id='newPost' name='title' type='text' placeholder='new post' onChange={handlePostInput} />
                    <input id='deletePassword' name='deletePost' type='password' placeholder='delete password' onChange={handlePostDelete}/>
                    <button className='createPost' id='useMaster'>Use Master Password</button>  
                    <div id='options'>
                        <button className='createPost' onClick={savePost}>Save</button>  
                        <button className='createPost' onClick={handleNewPost} >Cancel</button>  
                    </div>
                  </div>  
                : <button id='newPostButton' onClick={handleNewPost}>New Post</button>

            }
        </div>
    )
   
    
}

export default CreatePost