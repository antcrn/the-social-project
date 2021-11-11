import React, { useState } from 'react'
import Cookies from 'js-cookie'
import Posts from '../../components/Posts'
const Profile = () => {
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
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.created_at}</p>
            <p>{user.id}</p>
            <div>
                <Posts userId={user.id} />
            </div>
        </>
    )
}
export default Profile;