import React from 'react';
import "./threadSelect.css"


function ThreadSelect({threads, handleSearch, goToThread}) {

    const switchInput = (e) => {
        let searchInput = document.getElementsByClassName('searchInput')[0]
        if (e.target.innerHTML==='search') {
            searchInput.style.width=null
            searchInput.style.padding= null

        } else {
            searchInput.style.width='16em'
            searchInput.style.padding= '0 6px'
            searchInput.focus()
        }
        
        
    }

    return(
        <div className='threadSelect'>
            <h2>Please Select a discussion Thread from the list below</h2>
            <div className="searchBox" onMouseEnter={switchInput}>
                <input className="searchInput" type="text" name="search" autoComplete="off" onChange={handleSearch} placeholder="Search thread..." />
                <button className="searchButton"  href="#" onClick={switchInput}>
                    <i className="material-icons">search</i>
                </button>
            </div>
            <ul id='channel-list'>
                {threads.map((thread,i) => <li className='channel' onClick={goToThread} data-id={thread._id} key={i}>{thread.title}</li>)}
            </ul>
        </div>
    )
}

export default ThreadSelect