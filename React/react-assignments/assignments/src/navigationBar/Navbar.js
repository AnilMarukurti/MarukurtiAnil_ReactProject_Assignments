import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            
            <ul className='navbar'>
                <Link to="/" ><li>HOME</li></Link>
                <Link to="/projects"><li>PROJECTS</li></Link>
                <Link to="/services"><li>SERVICES</li></Link>
                <Link to="/contact"><li>CONTACT</li></Link>
            </ul>
            
        </div>
    )
}

export default Navbar
