import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';

import './Details.scss';
import { postState } from '../../store/posts/selector';
import { fetchPosts } from '../../store/posts/action';

export default function Details() {
    const dispatch = useDispatch();
    const id = Number(useParams<Params>().id);

    const post = useSelector(postState);
    console.log(id);
    const rightPost = post.postArray.find((a: any) => a.id === id)
    console.log(rightPost);

    type Params = {
        id: string
    }

    useEffect(
        function () {
            dispatch(fetchPosts());
        }, []
    )

    console.log(post);

    return <div >{post.loading ? <h1>Loading...</h1> : <div className="details">
        <div>
            <h3>Posted by:</h3>
            <p>{rightPost.user.username}</p>
            <img className='pf' src={rightPost.user.picture} />
            <div>
                <Button variant="outlined" color="primary">Like post</Button>
            </div>
            <div>
                <Button variant="outlined" color="primary">Follow user</Button>
            </div>
        </div>

        <div className="center">
            <h1>{rightPost.title}</h1>
            <p>{rightPost.text}</p>
            <img src={rightPost.image} />
        </div>
    </div>
    }
    </div>


}