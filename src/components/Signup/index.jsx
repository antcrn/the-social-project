import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userRequest, userSuccess, userFailed } from '../../redux/index.js'
import Cookies from 'js-cookie'
const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const error = useSelector(state => state.error)
    const subscribe = (e) => {
        e.preventDefault()
        const name = e.target.children[0].children[1].value
        const email = e.target.children[1].children[1].value
        const password = e.target.children[2].children[1].value
        const data = {
            username: name,
            email: email,
            password: password
        };
        const url = "http://localhost:1337/auth/local/register";
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
                    console.log(response, 'la reponse')
                    if (response.error) {
                        dispatch(userFailed(response.message[0].messages[0].message))
                    } else {
                        dispatch(userSuccess(response.user, response.jwt))
                        Cookies.set('token', response.jwt)
                        console.log('ligne 43')
                        navigate('/')
                    }
                })
        }
    }
    return (
        <>
            <h3>{error}</h3>
            <form onSubmit={subscribe}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" className="form-control" type="text" placeholder="Name" aria-label="default input example" />
                </div>
                <div className="form-group">
                    <label htmlFor="InputEmail">Email address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordSignup">Password</label>
                    <input type="password" className="form-control" id="passwordSignup" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordSignup">Confirmation password</label>
                    <input type="password" className="form-control" id="passwordConfirmationSignup" placeholder="Confirmation password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>

        </>
    )
}

export default Signup;