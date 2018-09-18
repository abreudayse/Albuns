
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class Album extends Component {
    render() {
        const details = this.props.album.style + ' / ' + this.props.album.year;
        return (
            <View style={styles.containerAlbum}>
                <View style={{marginHorizontal: 10, marginBottom: 10, borderBottomColor: '#737373', borderBottomWidth: 0.5, paddingBottom: 4, paddingTop: 8}}>
                    <Image style={{width: 64, height: 64}} source={{uri: this.props.album.avatar}}/>
                    <Text style={{fontSize: 16, color: '#262626'}}>{this.props.album.name}</Text>
                    <Text style={{fontSize: 14, color: '#737373'}}>{details}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerAlbum: {
        backgroundColor: '#f2f2f2',

    }
});
  