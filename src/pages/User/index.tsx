// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Paper, Button } from '@material-ui/core';

// import './User.scss';
// import { me } from '../../store/auth/selector';
// import PostPreview from '../../components/PostPreview';

// export default function User() {

//     const dispatch = useDispatch();
//     const user = useSelector(me);
//     return <div className="container">
//         <Paper className="profile-box">
//             {!user.id ? <h1>Loading...</h1> : <div className=" profiledata">

//                 <div style={{ backgroundImage: `url(${user.picture})` }} className="profile-picture"></div>
//                 <div>
//                     <h1>{user.username}</h1>
//                     <ul>
//                         <li>followers: 20</li>
//                         <li>posts: {user.posts.length}</li>
//                         <li>email: {user.email}</li>
//                         <li>Bio: {user.bio}</li>
//                     </ul>
//                     <div>

//                     </div>
//                 </div>
//                 <div>
//                 </div>
//             </div>}
//             <hr />
//             <h3 className="center">Posts:</h3>
//             <div className="container">
//                 {user.id ? user.posts.map(post => <PostPreview id={post.id} text={post.text} user={user.username} picture={user.picture} title={post.title} />) : <h2>Loading</h2>}
//             </div>
//         </Paper>
//     </div>


// }

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { TextField, FormControl } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AppsIcon from '@material-ui/icons/Apps';

import './User.scss';
import PostPreview from '../../components/PostPreview';
import { fetchSingleUser } from '../../store/auth/action';
import { singleUser } from '../../store/auth/selector';
import { sendMail } from '../../store/users/action';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { me } from '../../store/auth/selector';

export default function OtherUser() {
    interface ID {
        id: string
    }

    const dispatch = useDispatch();

    const user = useSelector(me);
    const [message, set_message] = useState('');
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    // useEffect(
    //     function () {
    //         console.log("in use effect")

    //     }, []
    // )

    function sendMessage(e) {
        e.preventDefault();
        dispatch(sendMail(message, user.email));
    }


    return <div className="container">
        <Paper className="profile-box">
            {!user.id ? <h1>Loading...</h1> : <div className=" profiledata">

                <div style={{ backgroundImage: `url(${user.picture})` }} className="profile-picture"></div>
                <div>
                    <p className="name">{user.username}</p>
                    <div className="followers"> <div>5 followers</div> <div>3 following</div></div>
                    <div>
                        <p className="bio">{user.bio}</p>

                    </div>
                </div>
                <div className="msg">


                </div>
            </div>}
            <hr />
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon tabs example"
            >
                <Tab icon={<AppsIcon />} aria-label="phone" />
                <Tab icon={<FastfoodIcon />} aria-label="favorite" />
                <Tab icon={<PhoneIcon />} aria-label="person" />
            </Tabs>

            {value === 2 ? <div className="sendingMsg"><FormControl>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                    value={message}
                    onChange={e => set_message(e.target.value)}
                />
                <Button type="submit" onClick={sendMessage} variant="contained" color="primary">Send message</Button>
            </FormControl></div> : ""}
            {value === 0 ? <div className="container">
                {user.id ? user.posts.map(post => <PostPreview id={post.id} text={post.text} user={user.username} picture={user.picture} title={post.title} />) : <h2>Loading</h2>}
            </div> : ""}

            {value == 1 ? <div className="food-data">
                <ul>
                    <li>Diet: {user.food.restriction}</li>
                    <li>Favourite Cuising: {user.food.cuisine}</li>
                    <li>Drinks alchol: {user.food.alcohol}</li>
                    <li>Favourite meal of the day: {user.food.meal}</li>
                </ul>
            </div> : ""}


            <form className="center">


            </form>
        </Paper>
    </div>


}