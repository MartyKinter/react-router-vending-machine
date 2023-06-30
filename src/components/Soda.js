import React from 'react';
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div>
            <h1>Here's a soda!</h1>
            <h1><Link to="/">Go Back</Link></h1>
        </div>
    )
};

export default Soda;