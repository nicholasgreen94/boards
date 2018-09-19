import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/Header/Head'
import LandingPage from './Pages/LandingPage/LandingPage'
import Profile from './Pages/Profile/Profile'
import Footer from './components/Footer/Footer'
import './App.css';

class App extends Component {
  state = {
   isLoggedIn: false,
   user: {}
  }

  changeAppState = (obj) => {
    this.setState(obj);
  }


  render() {
    return (
      <Router>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>boards • Create your own moodboard today</title>
            <meta name="description" content="boards is a way to create moodboards for different projects" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700" rel="stylesheet" />
          </Helmet>
          <a href='#skip' id='skip-nav'>{"Skip Nav"}</a>
          <div id='site-content'>
            <a id='skip'>{''}</a>
            <Header />
            <Route exact path="/" render={() => <LandingPage isLoggedIn={this.state.isLoggedIn} />} />
            <Route path='/profile' render={() => <Profile isLoggedIn={this.state.isLoggedIn} changeApp={this.changeAppState} user={this.state.user} />} />
            <Footer />
          </div>
        </div>
      </Router>
     );
  }
}

export default App;
