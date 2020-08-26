import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './User.scss';
import { me } from '../../store/auth/selector';

export default function User() {
    const dispatch = useDispatch();
    const user = useSelector(me);
    return <div>
        {!user.id ? <h1>Loading...</h1> : <div className="container profiledata">
            <div style={{ backgroundImage: `url(${user.picture})` }} className="profile-picture"></div>
            <div>
                <h1>{user.username}</h1>
                <div>
                    <span>20 followers </span>
                    <span>{user.posts.length} posts</span>
                </div>
                <p>{user.bio}</p>
                <p>{user.email}</p>
                {user.posts.map(post => post.title)}

            </div>
        </div>}
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto at, distinctio commodi animi numquam veritatis, quo praesentium voluptate cupiditate iste! Sit quibusdam non ratione nemo saepe. Aperiam, cum perferendis.   </p>
    </div>
}