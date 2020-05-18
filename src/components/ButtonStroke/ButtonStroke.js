import React from 'react';
import "./buttonStroke.css"



function ButtonStroke() {
    return(
        <div id='navigation'>
            <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
            <defs>
            <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6" fill="none" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
            </defs>
        </svg>       
            <a className="btn" href="/company" >Company
                <svg className="button-stroke" viewBox="0 0 154 13">
                <use href="#line"></use>
                </svg>
                <svg className="button-stroke" viewBox="0 0 154 13">
                    <use href="#line"></use>
                </svg>
            </a>
            <a className="btn" href="/public">Public
                <svg className="button-stroke" viewBox="0 0 154 13">
                    <use href="#line"></use>
                </svg>
                <svg className="button-stroke" viewBox="0 0 154 13">
                    <use href="#line"></use>
                </svg>
            </a>
            <a className="btn" href="/private">Private
                <svg className="button-stroke" viewBox="0 0 154 13">
                    <use href="#line"></use>
                </svg>
                <svg className="button-stroke" viewBox="0 0 154 13">
                    <use href="#line"></use>
                </svg>
            </a>
        </div>
    )
       
}

export default ButtonStroke

