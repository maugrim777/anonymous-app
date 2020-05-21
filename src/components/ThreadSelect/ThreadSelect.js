import React from 'react';
import "./threadSelect.css"


function ThreadSelect({threads}) {
    return(
        <div className='threadSelect'>
            <h2>Please Select a discussion Thread from the list below</h2>
            <div className="searchBox">
                <input className="searchInput"type="text" name="" placeholder="Search thread..." />
                <button className="searchButton" href="#">
                    <i className="material-icons">search</i>
                </button>
            </div>
            <ul id='channel-list'>
                {threads.map((thread,i) => <li className='channel' key={i}>{thread.title}</li>)}
            </ul>
        </div>
    )
}

export default ThreadSelect