import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <Link to="/analysis">Click Me</Link>
        </div>
    )
}

export default Navbar;