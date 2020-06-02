import React from 'react';
import "./displayOnePost.css"

function DisplayOnePost({post, handleMasterPass}) {
    console.log(post)
    return(
        <div className='postContainer'>
            <div id='thePost'>
                <h3 id='post-content'>{post.content}</h3>  
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-trash-alt"></i>
            </div>

            {post.replies.map((reply, i) => <div className='reply'>
                                                <h3 className='reply-content'>{reply.content}</h3>  
                                                <i class="fas fa-thumbs-up"></i>
                                                <i class="fas fa-trash-alt"></i>
                                            </div>)}

            <div className='reply-section'>
                <textarea className='reply' placeholder="Reply to post..."/>
                <input type='password' className='deleteReply' placeholder='delete password'/>
                <button className='replyButton' id='useMaster' onClick={handleMasterPass}>Use Master Password</button>
                <button className='replyButton' id='saveReply' data-postID={post._id}>Reply</button>
            </div>
        </div>
    )
}

export default DisplayOnePost