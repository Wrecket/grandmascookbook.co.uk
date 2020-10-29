import React from 'react';
import './Welcome.css'

const Welcome = (props) => {
    return ( 
        
        <div className="welcome">
            <div className="container-fluid">

                <div className=" title-wrap container-fluid text-left ">
                    <div className="welcome__title-wrap font container-fluid">
                            <div>
                                <h1 className="">Welcome.</h1>
                                <p>Grandma's Cookbook is a personal online repository, made to provide those that seek good food with the recipes needed to create it. Each recipe within this site has been sourced from all over the internet, edited and doctored by Grandma's magic touch, perfected and presented ready for use.</p>
                                <p className="">Choose a menu below or enter your requirement in the search bar to the top right, then drag to scroll through the available recipes.</p>
                            </div>
                    </div>
                    <div className="recipe__inputs container-fluid text-center">
                        <div className="recipe__input-wrap">
                            <div className="recipe__input-wrap-inner container-fluid">
                                <button className="check btn btn-secondary" id="main" onClick={props.check}>Mains</button>
                                <button className="check btn btn-secondary" id="side" onClick={props.check}>Sides</button>
                                <button className="check btn btn-secondary" id="dessert" onClick={props.check}>Dessert</button>
                                <button className="check btn btn-secondary" id="starter" onClick={props.check}>Starters</button>
                                <button className="check btn btn-secondary" id="cake" onClick={props.check}>Cake</button>
                                <button className="check btn btn-secondary" id="all" onClick={props.check}>All</button>
                            </div>
                            </div>
                    </div>     
                </div>    
                <div className="welcome__menu-box mt-2 container-fluid">                    
                </div>

                <div className="padder"></div>
            </div>
            
        </div>
        
     );
}
 
export default Welcome;