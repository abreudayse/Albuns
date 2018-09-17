import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{props.title}</Text>
    </View>
  )
}
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title='Albuns list'/>
        <View style={styles.containerContent}>
          <Text style={styles.text}>My list of albums page!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'pink'
  },
  containerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  textHeader: {
    fontSize: 16,
    color: 'black'
  }

});
