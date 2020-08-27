import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Matching from './pages/Matching';
import Login from './pages/Login';
import Details from './pages/Details';
import User from './pages/User';
import Signup from './pages/Singup';
import { isLoggedIn } from './store/auth/selector';
import { loginState } from './store/auth/action';

import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'



function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(isLoggedIn);

  useEffect(
    function () {
      dispatch(loginState);
    }, []
  );

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/forum" component={Forum} />
        <Route path="/forum/:id" component={Details} />
        <Route path="/matching" component={loggedIn ? Matching : Login} />
        <Route path="/me" component={loggedIn ? User : Login} />
        <Route path='/login' component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
