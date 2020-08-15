import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Matching from './pages/Matching';
import Login from './pages/Login';
import { isLoggedIn } from './store/auth/selector';

import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

const me = () => <div>ME!</div>

function App() {
  const loggedIn = useSelector(isLoggedIn)
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/forum" component={Forum} />
        <Route path="/matching" component={Matching} />
        <Route path="/me" component={loggedIn ? me : Login} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
