import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class AlbumDetails extends Component {
    render() {
        const { name, year, style, avatar } = this.props.navigation.state.params;
        console.log(avatar);
        return (
            <View style={styles.container}>
                <View style={{flex: 1, marginLeft: 8, marginTop: 10}}>
                    <View style={{}}>
                        <Image style={{width: 250, height: 250}} source={{uri: avatar}}/>
                    </View>
                    <Text style={{fontSize: 20, color: 'black'}}>{name}</Text>
                    <Text style={{fontSize: 18, fontStyle: 'italic'}}>{year}</Text>
                    <Text style={{fontSize: 18, fontStyle: 'italic'}}>{style}</Text>

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

