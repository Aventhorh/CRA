import React from "react";
import { Link } from "react-router-dom";
import cl from './Navbar.module.css'

const Navbar = () => {

    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__links}>
                <div className="navbar__item"><Link className={cl.navbar__item} to="/about">About</Link></div>
                <div className="navbar__item"><Link className={cl.navbar__item} to="/posts">Posts</Link></div>
            </div>
        </div>
    )
}

export default Navbar;