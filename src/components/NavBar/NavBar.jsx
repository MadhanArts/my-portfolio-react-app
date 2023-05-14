import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className='nav-bar'>
            <Link to='/'>
                <div className='logo'>
                    <img src='' alt='' />
                    <div className='logo-text'>Madhan</div>
                </div>
            </Link>
            <div className='menu-items'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    {/* <li>
                        <Link to='/projects'>Projects</Link>
                    </li> */}
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
