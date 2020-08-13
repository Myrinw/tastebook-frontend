import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Switch, Route } from 'react-router-dom';

const home = () => <div>Welcome home bitch</div>
const forum = () => <div>Welcome to the forum bitch</div>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/forum" component={forum} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
