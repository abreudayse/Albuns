
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default class AlbumItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerAlbum}>
                    <Image style={styles.avatar} source={{uri: this.props.album.avatar}}/>
                    <View style={styles.details}>
                        <Text style={styles.textName}>{this.props.album.name}</Text>
                        <Text style={styles.textStyle}>{this.props.album.style}</Text>
                        <Text style={styles.textYear}>{this.props.album.year}</Text>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
                            <Text>Details</Text>
                        </TouchableOpacity>
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
    textStyle: {
        fontSize: 14, 
        color: '#737373'
    },
    textYear: {
        fontSize: 14, 
        color: '#b3b3b3',
        fontStyle: 'italic'
    },
    details: {
        flex: 1,
        marginLeft: 8
    },
    containerButton: {
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'yellow', 
        justifyContent: 'center', 
        height: 28, 
        paddingHorizontal: 4, 
        borderRadius: 6
    }
});
  