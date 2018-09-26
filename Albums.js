import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView} from 'react-native';
import AlbumItem from './AlbumItem';

class Albums extends Component {

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
            style: 'POP',
            avatar: 'https://images.recordsale.de/256/256/britneyspears-inthezone(1).jpg'
          },
          {
            name: 'Michael Jackson',
            year: '1999',
            style: 'POP',
            avatar: 'https://pm1.narvii.com/6592/0559113767f2a3078f90096da338c55b239fe747_128.jpg'
          },
          {
            name: 'Link Park',
            year: '2004',
            style: 'Rock',
            avatar: 'https://pm1.narvii.com/6480/43326d4c7bd4ad6bc63162f1a4294877d6817936_128.jpg'
          },
          {
            name: 'Roberto Carlos',
            year: '2008',
            style: 'MPB',
            avatar: 'https://c-sf.smule.com/sf/s51/arr/00/90/1cf477c6-38d0-4e8b-82dd-a095d6ab754b.jpg'
          },
        ]
    
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(albunsArray) });
      }
    
      renderAlbum = album => {
        return <AlbumItem album={album} onPress={() => this.props.navigation.navigate('AlbumDetails', album)}/>;
      }
    
      render() {
        return (
          <View style={styles.container}>
            <ListView
                style={{marginTop: 10}}
              dataSource={this.state.dataSource}
              renderRow={this.renderAlbum}
              removeClippedSubviews={false}
            />
          </View>
        );
      }

}

export default Albums;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe6ff',
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
});
