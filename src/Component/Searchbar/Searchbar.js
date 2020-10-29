import React from 'react';
import './Searchbar.css';

const Searchbar = (props) => {
        return(
            <input className="nav__search" type="text" placeholder="Search..." onChange={props.handleSearch} />
        )

}

export default Searchbar