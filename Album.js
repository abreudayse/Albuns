
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
            <View style={styles.container}>
                <View style={styles.containerAlbum}>
                    <Image style={styles.avatar} source={{uri: this.props.album.avatar}}/>
                    <View style={styles.details}>
                        <Text style={styles.textName}>{this.props.album.name}</Text>
                        <Text style={styles.textDetails}>{details}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff4ff',
    },
    containerAlbum: {
        flexDirection: 'row',
        marginHorizontal: 10, 
        marginBottom: 10, 
        borderBottomColor: '#737373', 
        borderBottomWidth: 0.5, 
        paddingBottom: 4, 
        paddingTop: 8
    },
    avatar: {
        width: 64, 
        height: 64,
        borderRadius: 8
    },
    textName: {
        fontSize: 16, 
        color: '#262626'
    },
    textDetails: {
        fontSize: 14, 
        color: '#737373'
    },
    details: {
        marginLeft: 8
    }
});
  