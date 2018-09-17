import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView} from 'react-native';
import Album from './Album';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{props.title}</Text>
    </View>
  )
}

export default class App extends Component {

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }),
  }

  componentWillMount() {

    const albunsArray = [
      {
        name: 'Britney Spears',
        year: '2002',
        style: 'POP'
      },
      {
        name: 'Michael Jackson',
        year: '1999',
        style: 'POP'
      },
      {
        name: 'Link Park',
        year: '2004',
        style: 'Rock'
      },
      {
        name: 'Roberto Carlos',
        year: '2008',
        style: 'MPB'
      },
    ]

    this.setState({ dataSource: this.state.dataSource.cloneWithRows(albunsArray) });
  }

  renderAlbum = album => {
    return <Album album={album} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title='Albuns list'/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderAlbum}
          removeClippedSubviews={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6ff',
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
