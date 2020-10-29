import React from 'react';
import './Home.css'

const Home = () => {
        
    return ( 
        <div className="home">
            <div className="container-fluid text-left home__title-box pl-0">
                <h2 className="home__title font">Welcome.</h2>
                <p className="home__description"> Please select a menu below</p>
            </div>
            
            <div className="container-fluid home__title-box-bottom mt-5 pr-0">
                <p className="home__description-bottom mb-0">All recipes are sourced by Grandma from all over the net, editted and perfected by her expert touch.</p>
            </div>
        </div>
     );
}
 
export default Home;