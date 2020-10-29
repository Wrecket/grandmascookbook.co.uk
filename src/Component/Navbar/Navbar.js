import React from 'react';
import './Navbar.css'
import logo from '../media/gmcbmainbigblack.png'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar';


const Navbar = (props) => {
    return ( 
        <div id="navbar" className="Navbar">
            <div className="fixer">
                <div className="navbar-top font navbar-expand-lg navbar-light">
                        <div className="navbar__login d-flex">
                        <Link to="/login"><p className="navbar__log">Log in</p></Link>
                            <p className="navbar__sign ml-3">Sign up</p>
                        </div>
                </div>
                <nav className="navbar font navbar-expand-lg navbar-light">
                        <Link to="/"><img className="navbar__logo" src={logo} alt="logo"/></Link>
                        <Searchbar handleSearch={props.handleSearch} />
                </nav>
            </div>
        </div>
     );
}
 
export default Navbar;