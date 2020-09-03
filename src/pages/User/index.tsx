import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button } from '@material-ui/core';

import './User.scss';
import { me } from '../../store/auth/selector';
import PostPreview from '../../components/PostPreview';

export default function User() {

    const dispatch = useDispatch();
    const user = useSelector(me);
    return <div className="container">
        <Paper className="profile-box">
            {!user.id ? <h1>Loading...</h1> : <div className=" profiledata">

                <div style={{ backgroundImage: `url(${user.picture})` }} className="profile-picture"></div>
                <div>
                    <h1>{user.username}</h1>
                    <ul>
                        <li>followers: 20</li>
                        <li>posts: {user.posts.length}</li>
                        <li>email: {user.email}</li>
                        <li>Bio: {user.bio}</li>
                    </ul>
                    <div>

                    </div>
                </div>
                <div>
                </div>
            </div>}
            <hr />
            <h3 className="center">Posts:</h3>
            <div className="posts-grid container">
                {user.id ? user.posts.map(post => <PostPreview id={post.id} text={post.text} user={user.username} picture={user.picture} title={post.title} />) : <h2>Loading</h2>}
            </div>
        </Paper>
    </div>


}