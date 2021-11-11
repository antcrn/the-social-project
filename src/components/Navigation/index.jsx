import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import Cookies from 'js-cookie'

const Navbar = () => {
    const navigate = useNavigate()
    const token = Cookies.get('token');
    console.log(Cookies.get('token'))
    return (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            {token ?
                (
                    <><li><Link to="/profile">Profile</Link></li>
                        <li><button className="btn btn-danger" onClick={() => (Cookies.remove('token'), navigate('/'))}>LogOut</button></li>
                    </>
                )
                :
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