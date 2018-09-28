import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class AlbumDetails extends Component {
    render() {
        const { name, year, style, avatar } = this.props.navigation.state.params;
        console.log(avatar);
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text>{name}</Text>
                    <Text>{year}</Text>
                    <Text>{style}</Text>
                    <View style={{flex: 1}}>
                        <Image style={{width: 100, height: 100}} source={{uri: avatar}}/>
                    </View>
                </View>

            </View>
        );
    }
}

export default AlbumDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

