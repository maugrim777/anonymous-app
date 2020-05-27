import React from 'react';
import "./footer.css"




function Footer({thread=false, toggleDeleteThread}) {

    switch(thread) {
        case true: return(
                    <footer id='footer'>
                        <a href="https://gvlasceanu.netlify.com/" target='_blank' rel="noopener noreferrer">
                            <div className='logo'></div>
                        </a>
                        <div id='copyright'>
                            <p>Delete Thread</p>
                            <i class="fas fa-trash-alt" onClick={toggleDeleteThread}></i>    
                        </div>
                    </footer> 
                    ); 
        default: return(
                    <footer id='footer'>
                        <a href="https://gvlasceanu.netlify.com/" target='_blank' rel="noopener noreferrer">
                            <div className='logo'></div>
                        </a>
                        <div id='copyright'>
                            &copy; Copyright - Gabriel Vlasceanu - All Rights Reserved.
                        </div>
                    </footer> 
                )
    }
    
}

export default Footer