import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import Carousel from 'react-material-ui-carousel';
import { Button, Card, CircularProgress } from '@material-ui/core';
import { fetchPosts } from '../../store/posts/action';
import { postState } from '../../store/posts/selector'

import PostPreview from '../../components/PostPreview';




export default function Home() {
    const dispatch = useDispatch();
    const postSelect = useSelector(postState);

    useEffect(function () {
        dispatch(fetchPosts());
    }, []);

    const maxPosts = postSelect.postArray.filter((e, i) => i < 4);

    var items: { name: string; description: string; image: string }[] = [
        {
            name: "An awesome food-related forum",
            description: "Probably the most random thing you have ever seen!",
            image: "https://yummyvalley.ca/wp-content/uploads/2017/10/friends-eating-food.jpg"
        },
        {
            name: "Make food-friends!",
            description: "Hello World!",
            image: "https://www.debic.com/sites/default/files/2020-03/Desserts_32.jpg"
        },
        {
            name: "Sign up now!",
            description: "dfhefefs",
            image: "https://i0.wp.com/magnetmeblogen.mmcontent.nl/wp-content/uploads/2019/10/maarten-van-den-heuvel-EzH46XCDQRY-unsplash.jpg?fit=1024%2C768&ssl=1"
        }
    ];
    function Item(props: { key: number; item: { name: string; description: string; image: string; } }) {
        return (
            <div style={{
                backgroundImage: `linear-gradient(rgba(104, 104, 104, 0.6), rgba(104, 104, 104, 0.6)), url(${props.item.image})  `
            }} className="slide">
                <div className="container">
                    <div className="btn-center">
                        <h1 className="hero-title">{props.item.name}</h1>
                    </div>

                </div>
            </div>
        )
    }


    return <div>
        <Carousel interval={3000} indicators={false} navButtonsAlwaysVisible={true}	>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>

        <div className="container">
            <Card className="text-box center margin-vert">
                <div>
                    <h2>Welcome to Tastebook!</h2>
                    <p className="margin-vert-sm">Welcome to Tastebook. Tastebook is created for people to connect with eachother based on food-interersts! We have an active forum where users can post all kinds of food-related posts, from recipe idea's, food-reviews, and restaurent experiences! Besides that a user can also use the matcher to find friends who have the same food interests/diet as you do! This way it becomes a lot easier to meat people who are the same food-fanatics as you are. Don't hesitate and sign up already!</p>
                </div>
            </Card>


            <h2 className="center">Recent posts:</h2>


            {postSelect.loading ? <div className="center"><CircularProgress className="center" /></div> : <div className="post-row">
                {maxPosts.map(post => <PostPreview id={post.id} key={post.id} picture={post.user.picture} text={post.text} title={post.title} user={post.user.username} />)}
            </div>}


        </div>
    </div>
}