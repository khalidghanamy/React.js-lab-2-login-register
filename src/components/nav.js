import React from "react";
import {Link,NavLink} from "react-router-dom"
function Navbar() {
    return ( <>
    
    <nav className="nav"> 

        <NavLink className="nav-link btn m-1" exact  to="/">Active</NavLink>
        <NavLink className="nav-link btn m-1"   to="/login">login</NavLink>
        <NavLink className="nav-link btn m-1"   to="/about">login</NavLink>
        <NavLink className="nav-link btn m-1"   to="/register">register</NavLink>
        
    </nav>

    </> );
}

export default Navbar;