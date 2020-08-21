import React from 'react';
import './PostPreview.scss';
import { Button } from '@material-ui/core';
import { PostValues } from '../../types';

export default function PostPreview(props: PostValues) {
    return <div className="post-box">
        <div>
            <p>{props.user} wrote:</p>
            <img className="pf" src={props.picture} />
        </div>
        <div className="post-text">
            <h3>{props.title}</h3>
            <div className="post-description">
                <p>
                    {props.text}
                </p>
            </div>

            <Button color="primary">Read more..</Button>

        </div>
    </div>
}