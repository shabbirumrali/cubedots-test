import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-container">
            <h5>Navigation</h5>

            <nav className="nav">
                <ul>
                    <Link to="/cubedots"><li>Home</li></Link>
                    <Link to="/cubedots/apartment" ><li>Apartment</li></Link>
                    <Link to="/cubedots/building"><li>Building</li></Link>
                    <Link to="/cubedots/floor"> <li>Floor</li></Link>
                    <Link to="/cubedots/gallery" ><li>Gallery</li></Link>
                    <Link to="/cubedots/location"><li>Location</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
