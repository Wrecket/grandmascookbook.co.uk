import React from 'react';
import { Link } from 'react-router-dom'


const Signin = () => {
    return ( 
        <div className="Signin d-flex">
            <Link to="/login"><p className="navbar__log">Log in</p></Link>
            <Link to="/signup"><p className="navbar__sign ml-3">Sign up</p></Link> 
        </div>
     );
}
 
export default Signin;


