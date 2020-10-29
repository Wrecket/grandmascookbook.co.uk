import React from 'react';
import './FilterItem.css'

const Filteritem = ({filter}) => { 
    return ( 
        <div className="filterItem">
            <div className=" welcome__menu-box-outer">
                    <div className="welcome__menu-box-inner">
                        <img src={filter.image} alt={filter.name} className="welcome__menu-box-img"/>
                        <div className="welcome__menu-name-wrap">
                            <h3 className="welcome__menu-box-img-text font">{filter.name}</h3>
                        </div>
                        
                    </div>
             </div>
        </div>
     );
}
 
export default Filteritem;