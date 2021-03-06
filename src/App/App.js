import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/Auth/Auth';
import Team from '../components/Team/Team';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import fbConnection from '../helpers/data/connection';
import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false, // the app loads, you are not authenticated
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <Team />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
        <div className="App">
          <MyNavbar authed={authed}/>
        <h2 className="text-center">The Historic Chicago Bulls 1997 Championship Team</h2>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
