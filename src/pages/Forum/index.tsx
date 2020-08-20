import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Forum.scss';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Post from '../../components/Post';
import { fetchPosts, PostAPost } from '../../store/posts/action';
import { postState } from '../../store/posts/selector';






export default function Forum() {
    const dispatch = useDispatch();
    const posts = useSelector(postState);

    const [postTitle, set_postTitle] = useState('');
    const [postText, set_postText] = useState('');
    const [url, set_url] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formSubmit = () => {
        setOpen(false);
        dispatch(PostAPost(postTitle, postText, url));
    }

    useEffect(
        function () {
            dispatch(fetchPosts())
        }, [posts.postSuccess]
    )

    return <div className="forum">
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create a post!</DialogTitle>
            <DialogContent>
                {/* <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
          </DialogContentText> */}
                <TextField
                    value={postTitle}
                    onChange={(e) => set_postTitle(e.target.value)}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="post title"
                    type="text"
                    variant="outlined"
                    className="margin-vert-xs"

                    fullWidth
                />

                <TextField
                    value={postText}
                    onChange={(e) => set_postText(e.target.value)}
                    id="outlined-multiline-static"
                    label="Post describtion"
                    multiline
                    rows={4}
                    className="margin-vert-xs"
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    value={url}
                    onChange={(e) => set_url(e.target.value)}
                    className="margin-vert-xs"
                    autoFocus
                    margin="dense"
                    id="url"
                    label="Image url"
                    type="text"
                    fullWidth
                    variant="outlined"

                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={formSubmit} color="primary">
                    Subscribe
          </Button>
            </DialogActions>
        </Dialog>
        <div className="posts">
            <div className="sort-row">
                <h3>Category:</h3>
                <select>
                    <option>blabls</option>
                </select>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Create a post!
                </Button>
            </div>
            {posts.loading ? <div>LOADING..</div> : posts.postArray.map((post) => <Post key={post.id} title={post.title} text={post.text} likes={post.likes} postImg={post.image} user={post.user} />)}

        </div>
    </div>
}