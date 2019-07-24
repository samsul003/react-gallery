import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import authService from '../api/authService';
import Thumbnail from './common/Thumbnail';
import Gallery from './Gallery';
import HomeScreen from './HomeScreen';
import ImageUpload from './ImageUpload';
import ImgurAuthHandler from './ImgurAuthHandler';
import NavBar from './NavBar';
import ThumbnailDetails from './ThumbnailDetails';

class App extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    const hasToken = !!authService.fetchToken();
    this.setState({ isSignedIn: hasToken });
  }

  handleLogin = () => {
    authService.initAuthClient();
  };

  handleLogout = () => {
    localStorage.removeItem('imgur_token');
    window.location = '/';
  };

  render() {
    const { isSignedIn } = this.state;

    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar
            isAuthenticated={isSignedIn}
            onLogin={this.handleLogin}
            onLogout={this.handleLogout}
          />
          <main className='container'>
            <Switch>
              <Route path='/thumbnail' exact component={Thumbnail} />
              <Route path='/uploads' exact component={ImageUpload} />
              <Route path='/gallery/:id' exact component={ThumbnailDetails} />
              <Route path='/gallery' exact component={Gallery} />
              <Route
                path='/oauth2/callback'
                exact
                component={ImgurAuthHandler}
              />
              <Route path='/' exact component={HomeScreen} />
            </Switch>
          </main>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
