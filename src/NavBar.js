import React from 'react'
import {NavLink} from "react-router-dom";
import './NavBar.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons'
function NavBar() {

    return (
        <nav className='navbar'>
            <div className="container">
                <div className="logo"><span className='symbol'>&#9883;</span> Tijo T Joseph <span className='sub-title'>/ web developer</span></div>
                <ul className='mobile--ul'>
                    <li className='mobile--li'>
                        <NavLink exact to="/" activeClassName="active" className='link'>About Me</NavLink>
                    </li>
                    <li className='mobile--li'>
                        <NavLink to="/resume" activeClassName="active" className='link'>resume</NavLink>
                    </li>
                    <li className='mobile--li'>
                        <NavLink to="/projects" activeClassName="active" className='link'>projects</NavLink>
                    </li>
                    <li className='mobile--li'>
                        <NavLink to="/contact" activeClassName="active" className='link'>contact</NavLink>
                    </li>

                    {/* <div className="mobile--menu--icon">
                    {
                        isMobile ?
                        <FontAwesomeIcon icon={faCirclePlay} className='font--icon'/> :
                        <FontAwesomeIcon icon={faCirclePause} className='font--icon'/> 
                    }
                    </div> */}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar