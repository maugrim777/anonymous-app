import React from 'react';
import "./topicSelect.css"


function TopicSelect() {
    return(
        <div className='topicSelect'>
            <h2>Please Select a discussion Topic from the list below</h2>
            <div class="searchBox">
                <input class="searchInput"type="text" name="" placeholder="Search topic..." />
                <button class="searchButton" href="#">
                    <i class="material-icons">search</i>
                </button>
            </div>
            <ul id='channel-list'>
                    <li className='channel'>topic1</li>
                    <li className='channel'>topic2</li>
                    <li className='channel'>topic3</li>
                    <li className='channel'>topic4</li>
                    <li className='channel'>topic5</li>
                    <li className='channel'>topic6</li>
                    <li className='channel'>topic7</li>
            </ul>
        </div>
    )
}

export default TopicSelect