import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';

import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBM6R3kOn91vByXU7mPz1MoG9p2sJS_dsE',
      authDomain: 'auth-5be7a.firebaseapp.com',
      databaseURL: 'https://auth-5be7a.firebaseio.com',
      projectId: 'auth-5be7a',
      storageBucket: 'auth-5be7a.appspot.com',
      messagingSenderId: '473764032041'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (<Card>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        </Card>);
      case false:
        return <LoginForm />;
      default:
        return (<View style={styles.spinnerStyle}>
                   <Spinner size="large" />
              </View>);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  spinnerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  }
};
