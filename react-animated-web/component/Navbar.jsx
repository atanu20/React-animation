import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <header>
            <NavLink to="/">
                <h2>LOGO</h2>
            </NavLink>
            <NavLink to="/" className="btn btn-info">
               Join Now
            </NavLink>

        </header>
            
        </>
    )
}

export default Navbar
