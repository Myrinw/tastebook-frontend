import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Forum.scss';
import { Button } from '@material-ui/core';

import Post from '../../components/Post';
import { fetchPosts } from '../../store/posts/action';
import { postState } from '../../store/posts/selector';






export default function Forum() {
    const dispatch = useDispatch();
    const posts = useSelector(postState);

    useEffect(
        function () {
            dispatch(fetchPosts())
        }, []
    )

    return <div className="forum">
        <div className="posts">
            <div className="sort-row">
                <h3>Category:</h3>
                <select>
                    <option>blabls</option>
                </select>
                <Button variant="contained" color="primary">
                    Create a post!
                </Button>
            </div>
            {posts.loading ? <div>LOADING..</div> : posts.postArray.map((post) => <Post key={post.id} title={post.title} text={post.text} likes={post.likes} postImg={post.image} user={post.user} />)}

        </div>
    </div>
}