import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import Carousel from 'react-material-ui-carousel';
import { Button, Card, CircularProgress } from '@material-ui/core';
import { fetchPosts } from '../../store/posts/action';
import { postState } from '../../store/posts/selector'

import PostPreview from '../../components/PostPreview';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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

            <section className="about">
                <div className="center">
                    <h2 className="about-title">About Tastebook</h2>
                </div>

                <div className="feature-grid margin-vert-xs">
                    <div className="feature-card">
                        <QuestionAnswerIcon />
                        <h3>The forum</h3>
                        <p>Tastebook has an active forum, where people can communicate with eachother. People can:
                    </p>

                    -Share your recipe's. There a lots of recipe's that are really nice but never get discovered by other people.
                    -Restaurent experiences.
                    -Ask questions

                </div>
                    <div className="feature-card">
                        <SupervisorAccountIcon />
                        <h3>The matching page</h3>
                        <p>When signing up to tastebook, you get to answer some questions about your food preferences. This is really important because it allows you to match with people who like the exact same food you do!</p>
                    </div>
                    <div className="feature-card">
                        <MailOutlineIcon />
                        <h3>Send messages</h3>
                        <p>Just found a user on the forum or matching page, and want to send them a message? You totally can! If you view someone's profile you get too see a message box. As soon as send your message the user recieve an email.</p>
                    </div>
                </div>
            </section>




            <h2 className="center recent">Recent posts</h2>


            {postSelect.loading ? <div className="center"><CircularProgress className="center" /></div> : <div className="post-row">
                {maxPosts.map(post => <PostPreview id={post.id} key={post.id} picture={post.user.picture} text={post.text} title={post.title} user={post.user.username} />)}
            </div>}


        </div>
    </div>
}