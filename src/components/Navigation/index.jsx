import { Link } from "react-router-dom";
import React from 'react'
import Cookies from 'js-cookie'

const Navbar = () => {
    const token = Cookies.get('token');
    console.log(Cookies.get('token'))
    return (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            {token ?
                (<li><Link to="/profile">Profile</Link></li>) :
                (<>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>

                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </>)
            }
        </>
    )
}
export default Navbar;