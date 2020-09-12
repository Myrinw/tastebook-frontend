import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Forum.scss';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Card, FormControl } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ForumIcon from '@material-ui/icons/Forum';
import Post from '../../components/Post';
import { fetchPosts, PostAPost } from '../../store/posts/action';
import { postState } from '../../store/posts/selector';
import { FetchPosts, PostsArray } from '../../types';



export default function Forum() {
    const dispatch = useDispatch();
    const posts = useSelector(postState);

    const [postTitle, set_postTitle] = useState('');
    const [postText, set_postText] = useState('');
    const [url, set_url] = useState('');
    const [open, setOpen] = useState(false);
    const [postSort, set_postSort] = useState<boolean>(true);

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
            dispatch(fetchPosts());

        }, [posts.postSuccess]
    );


    function setSort(e: any) {
        if (e.target.value === "likes") {
            set_postSort(false);
        } else if (e.target.value === "recent") {
            set_postSort(true);
        }
    }

    let postOrder;
    if (postSort) {
        postOrder = posts.postArray.sort((a, b) => {
            return +new Date(b.createdAt) - +new Date(a.createdAt)
        })
    } else {
        postOrder = posts.postArray.sort((a, b) => b.likes.length - a.likes.length);
    }

    console.log(postOrder);

    return <div className="forum">
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create a post!</DialogTitle>
            <DialogContent>
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
                    Post
          </Button>
            </DialogActions>
        </Dialog>

        <div className="posts">
            <div className="sort-row">
                <div>

                </div>


            </div>
            <h4>Sort:</h4>
            <select onChange={setSort}>
                <option value="recent">most recent</option>
                <option value="likes">most likes</option>
            </select>
            <Card className="posting-card" onClick={handleClickOpen} >
                <form className="text-bar">
                    <TextField
                        fullWidth
                        id=" component-disabled"
                        label="What's up?"
                        value=""
                        variant="outlined"
                        className="post-text"
                    />
                    <Button variant="contained" color="primary">Post</Button>
                </form>

                <div className="flex-between margin-top-5">
                    <div className="share">Share recipes <ReceiptIcon /></div>
                    <div className="share">Share experiences <FastfoodIcon /></div>
                    <div className="share">Share your opinion <ForumIcon /></div>
                </div>




            </Card>

            {posts.loading ? <div>LOADING..</div> : postOrder.map((post) => <Post id={post.id} key={post.id} title={post.title} text={post.text} likes={post.likes} postImg={post.image} user={post.user} />)}

        </div>

    </div>
}