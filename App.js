import React, {Component} from 'react';
import Albums from './Albums';
import { StackNavigator } from 'react-navigation';

export default class App extends Component {

  render() {
    return <AlbumsStack />
  }
}

export const AlbumsStack = StackNavigator({
  Albums: {
    screen: Albums,
    navigationOptions: {
      title: 'Albums List',
      headerMode: 'screen',
    },
  }
});


