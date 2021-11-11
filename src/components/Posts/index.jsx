import React, { useState } from 'react'
import Cookies from 'js-cookie'

const Posts = (userId) => {
    const [posts, setState] = useState('');
    React.useEffect(
        () => {
            const url = `http://localhost:1337/posts?user.id=${userId.userId}&_sort=id:asc`
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
                .then((response) => (setState(response)))

        },
        [userId],
    );

    return (
        <>
            <h1>Tweets</h1>
            <p>{posts && console.log(posts, 'les posts')}</p>
            <div>{posts && posts.map((p) =>
                <div key={p.id}><p>{p.text}</p>
                    <br />
                    <i>{p.updated_at.toString()}</i>
                    <p>{p.like} <small>Likes</small></p>

                </div>

            )}</div>

        </>
    )
}
export default Posts;