import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, CardActionArea, TextField } from '@material-ui/core';

import './Details.scss';
import { postState, state } from '../../store/posts/selector';
import { userId } from '../../store/auth/selector';
import { fetchPosts, postComment } from '../../store/posts/action';
import { fetchLikes, postALike, removeALike } from '../../store/likes/action';

export default function Details() {
    type Params = {
        id: string
    }

    const dispatch = useDispatch();
    const id = Number(useParams<Params>().id);
    const [commentText, set_commentText] = useState<string>('');
    const post = useSelector(postState);
    const userID = useSelector(userId);
    const rightPost = post.postArray.find((a: any) => a.id === id);
    const allLike = useSelector(state);


    useEffect(
        function () {
            dispatch(fetchPosts());
            dispatch(fetchLikes());


        }, []
    )


    function formSubmit() {
        dispatch(postComment(commentText, id))
    }

    function postLike() {
        if (liked) {
            dispatch(removeALike(id))
        } else {
            dispatch(postALike(id));
        }

    }

    const liked = allLike.length > 1 ? allLike.find((u) => u.postId === id) : undefined;



    return <div >
        {post.loading ? <h1>Loading...</h1> : <div className="details">
            <div>
                <Card className="post-user">
                    <h3>Posted by:</h3>
                    <img className='pf' src={rightPost.user.picture} />
                    <p>{rightPost.user.username}</p>
                    <p>20 followers</p>
                    <div className="mt-20">
                        <Button variant={liked ? "contained" : "outlined"} onClick={postLike} color="primary">Like</Button>
                    </div>
                    <div>
                        <Button variant="outlined" color="primary">Follow +</Button>
                    </div>
                </Card>
            </div>


            <div >
                <Card >
                    <CardContent>
                        <h1>{rightPost.title}</h1>
                        <p>{rightPost.text}</p>
                    </CardContent>
                    <CardActionArea>
                        <CardMedia className="card-image" image={rightPost.image} />
                    </CardActionArea>
                </Card>
            </div>


            <div>
                <Card className="comments">
                    <h3>Comments:</h3>
                    {rightPost.comments.map((comment) => <div className="comment">{comment.text}</div>)}
                    <form className="comment-form ">
                        <TextField id="filled-basic" value={commentText} onChange={e => set_commentText(e.target.value)} fullWidth label="Outlined" variant="outlined" />
                        <Button variant="contained" color="primary" onClick={formSubmit} >Send</Button>
                    </form>
                </Card>
            </div>
        </div>
        }
    </div>


}