import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import Carousel from 'react-material-ui-carousel';
import { Button, Box } from '@material-ui/core';
import { fetchPosts } from '../../store/posts/action';
import { postState } from '../../store/posts/selector'

import PostPreview from '../../components/PostPreview';




export default function Home() {
    const dispatch = useDispatch();
    const postSelect = useSelector(postState);
    useEffect(function () {
        console.log("ohhyyeyeyey")
        dispatch(fetchPosts());
    }, []);

    const maxPosts = postSelect.postArray.filter((e, i) => i < 4)

    var items: { name: string; description: string }[] = [
        {
            name: "See our forum with all kinds of food-related threads!",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Find a friend with the exact same food-interests as you!",
            description: "Hello World!"
        },
        {
            name: "Sign up now!",
            description: "dfhefefs"
        }
    ];
    function Item(props: { key: number; item: { name: string; description: string } }) {
        return (
            <div className="slide">
                <div className="container">
                    <div className="btn-center">
                        <h1 className="hero-title">{props.item.name}</h1>
                        <Button className="auto" variant="contained" color="primary">
                            Sign up!
                    </Button>
                    </div>

                </div>
            </div>


        )
    }


    return <div>
        <Carousel interval={80000} indicators={false} navButtonsAlwaysVisible={true}	>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
        <div className="container">
            <div className="center margin-vert">
                <h2 >Welcome to Tastebook!</h2>
                <p className="margin-vert-sm">Welcome to Tastebook. Tastebook is created for people to connect with eachother based on food-interersts! We have an active forum where users can post all kinds of food-related posts, from recipe idea's, food-reviews, and restaurent experiences! Besides that a user can also use the matcher to find friends who have the same food interests/diet as you do! This way it becomes a lot easier to meat people who are the same food-fanatics as you are. Don't hesitate and sign up already!</p>
                <Button variant="contained" color="primary">
                    Sign up!
                </Button>
            </div>

            <h2 className="center">Recent posts:</h2>

            <div className="post-row">
                {postSelect.loading ? <div>Loading...</div> : maxPosts.map(post => <PostPreview id={post.id} key={post.id} picture={post.user.picture} text={post.text} title={post.title} user={post.user.username} />)}
            </div>

        </div>
    </div>
}