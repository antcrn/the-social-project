import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userRequest, userSuccess, userFailed } from '../../redux/index.js'
import Cookies from 'js-cookie'
const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const error = useSelector(state => state.error)

    const login = (e) => {
        e.preventDefault()
        const name = e.target.children[0].children[1].value
        const password = e.target.children[1].children[1].value
        const data = {
            identifier: name,
            password: password
        };
        console.log(name, password)
        const url = "http://localhost:1337/auth/local";
        const contentHeader = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        dispatch(handleFetch(url, contentHeader))
    }
    const handleFetch = (url, contentHeader) => {
        return (dispatch) => {
            dispatch(userRequest())
            fetch(url, contentHeader)
                .then((response) => response.json())
                .then((response) => {
                    if (response.error) {
                        dispatch(userFailed(response.message[0].messages[0].message))
                    } else {
                        dispatch(userSuccess(response.user, response.jwt))
                        Cookies.set('token', response.jwt)
                        navigate('/profile')
                    }
                })
        }
    }
    return (
        <>
            <h3>{error}</h3>
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="InputEmailLogin">Email address</label>
                    <input type="email" className="form-control" id="InputEmailLogin" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordSignin">Password</label>
                    <input type="password" className="form-control" id="passwordSignin" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </>
    )
}

export default SignIn;