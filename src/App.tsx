import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Matching from './pages/Matching';

import { Switch, Route } from 'react-router-dom';

const home = () => <div>Welcome home bitch</div>
const forum = () => <div>Welcome to the forum bitch</div>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/forum" component={Forum} />
        <Route path="/matching" component={Matching} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
