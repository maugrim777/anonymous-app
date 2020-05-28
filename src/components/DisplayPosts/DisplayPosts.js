import React from 'react';
import "./displayPosts.css"

function DisplayPosts({state, handleReplyInput, handleReplyDelete, saveReply, fullPost}) {
    return(
        <div className='postsList'>
            {state.thread.posts.map((post,i) => 
                <div key={i} className='post'>
                    <h3 id='post-content'>{post.content}</h3>  
                    <div id="like-and-id">
                        <i class="fas fa-thumbs-up"></i>
                        <p>id: {post._id}</p>
                    </div>
                    <p id='total-replies'>{post.replies.length} total replies. <span data-postID={post._id} onClick={fullPost}>See full post here...</span></p>
                    {post.replies.map((reply,i) => {
                        if (i<=2) {
                        return <div key={i} className='replyItem'>
                                    <div className='replyItemText'>{reply.content}</div>
                                    <i class="fas fa-trash-alt"></i>
                                </div>}
                    })}
                    <div id='reply-section'>
                        <textarea className='reply' placeholder="Reply to post..." onChange={handleReplyInput}/>
                        <input type='password' className='deleteReply' placeholder='delete password' onChange={handleReplyDelete} />
                        <button className='replyButton' id='useMaster'>Use Master Password</button>
                        <button className='replyButton' id='saveReply' data-postID={post._id} onClick={saveReply}>Reply</button>
                    </div>
                    <i class="fas fa-trash-alt"></i>

                </div>)}
        </div>
        
       
    )
}

export default DisplayPosts