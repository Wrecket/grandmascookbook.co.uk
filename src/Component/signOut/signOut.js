import React from 'react';
import { Link } from 'react-router-dom'


const Signout = ({isSignedIn}) => {
    return ( 
        <div className="Signout d-flex">
            <Link to="/"><p className="navbar__log" onClick={() => isSignedIn(false)}>Sign Out</p></Link>
        </div>
     );
}
 
export default Signout;


