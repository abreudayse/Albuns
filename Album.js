
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Album extends Component {
    render() {
        const details = this.props.album.style + ' / ' + this.props.album.year;
        console.log(this.props.album);
        return (
            <View style={styles.containerAlbum}>
                <Text>{this.props.album.name}</Text>
                <Text>{details}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerAlbum: {
        backgroundColor: '#f2f2f2',
    }
});
  