import React from 'react';
import './Post.scss';

import { Card, CardMedia, CardContent, CardActionArea, CardActions, Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import { PostCard } from '../../types';

export default function Post(props: PostCard) {

    return <div className="post">
        <Card>
            <CardContent>
                <div className="card-top">
                    <img className="user" src={props.user.picture} />
                    <p>{props.user.username}</p>
                </div>

                <h2>{props.title}</h2>
                <p>{props.text}</p>
                {/* <img className="post-img" src="https://media-cdn.tripadvisor.com/media/photo-s/17/5b/c8/d0/shinsen.jpg" /> */}
            </CardContent>
            <CardActionArea >
                <CardMedia className="card-media" title="blblb" image={props.postImg} />
            </CardActionArea>
            <p style={{ paddingLeft: "15px" }}>{props.likes?.length} likes </p>
            <CardActions>
                <Button color="primary" > <ThumbUpIcon className="thumb" />  Like </Button>
                <Button color="primary" > <ChatBubbleOutlineIcon /> Comment </Button>

            </CardActions>
        </Card>
    </div>

}