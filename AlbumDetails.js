import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AlbumDetails extends Component {
    render() {
        const { name, year, style } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View>
                    <Text>{name}</Text>
                    <Text>{year}</Text>
                    <Text>{style}</Text>
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

