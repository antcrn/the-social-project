import React, { useState } from 'react'
import Cookies from 'js-cookie'

const Posts = () => {
    const [user, setState] = useState('');

    React.useEffect(
        () => {
            const url = "http://localhost:1337/users/me"
            const token = Cookies.get('token');

            const contentHeader = {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            };

            fetch(url, contentHeader)
                .then((response) => response.json())
                .then((response) => setState(response))
        },
        [],
    );


    return (
        <>
            <h1>Profile</h1>
            <p>{console.log(user)}</p>
            <p>{posts.username}</p>
            <p>{posts.email}</p>
            <p>{posts.created_at}</p>
            <p>{user.id}</p>
        </>
    )
}
export default Posts;