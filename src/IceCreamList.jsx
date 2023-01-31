import React from 'react';
import './style.css'

function IceCreamList(props) {
    const FlavorListItems = props.flavors.map((flavor, index) => {
        return(
            <li key= {index + 1}>{flavor.name}</li>
        );
    });
    
    
    return (
        <ul className={props.flavors.favorite === true ? 'brown' : 'white'}>
            {FlavorListItems}
        </ul>
    )
}

export default IceCreamList;

