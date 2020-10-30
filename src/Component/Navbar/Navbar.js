import React from 'react';
import './Navbar.css'
import logo from '../media/gmcbmainbigblack.png'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar';
import Signin from '../Signin/Signin';
import Signout from '../signOut/signOut';


const Navbar = (props) => {

    return ( 
        <div id="navbar" className="Navbar">
            <div className="fixer">
                <div className="navbar-top font navbar-expand-lg navbar-light">
                        <div className="navbar__login d-flex">
                        { props.state.signedIn === false 
                        ? <Signin />
                        : <Signout isSignedIn={props.isSignedIn} />   
                        }
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