import React from 'react';
import "./displayOnePost.css"

function DisplayOnePost({post}) {
    console.log(post)
    return(
        <div className='postContainer'>
            <div id='thePost'>
                <h3 id='post-content'>{post.content}</h3>  
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-trash-alt"></i>
            </div>
            <div id="theReplies">the replies will go here</div>
        </div>
        
       
    )
}

export default DisplayOnePost