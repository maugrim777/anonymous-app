import React from 'react';
import "./topNav.css"


class TopNav extends React.Component {

   
    componentDidMount() {
        let key = document.getElementById('masterPassKey')

        key.onmouseenter = () => {
            key.innerHTML = "  Setup / Change Master Password"
        }

        key.onmouseleave = () => {
            key.innerHTML = null
        }
    }

    goHome = () => {
        console.log(this.props)
        this.props.history.push('/')
    }

    createMasterPass = () => {
        let masterPass = prompt("Please enter a Master Password for Deleting Posts and Replies");

        if (masterPass == null || masterPass === "") {
            alert("The master pass was not created or changed");
          } else {
            window.localStorage.setItem('masterPassword', masterPass)
            alert("Your master password was successfully changed!");
          }
    }

    render() {
        return(
            <nav className='navigation'>
                <i class="fas fa-home" onClick={this.goHome}></i>
                <i class="fas fa-key" id='masterPassKey' onClick={this.createMasterPass}></i>
            </nav>
        )
    }
    
}

export default TopNav