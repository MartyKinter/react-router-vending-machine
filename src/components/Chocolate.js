import React from 'react';
import { Link } from "react-router-dom";


const Chocolate = () => {

    return (
        <div>
            <h1>Here is a chocolate bar!</h1>
            <h1><Link to="/">Go Back</Link></h1>
        </div>
    )
};

export default Chocolate;