import React from "react";
import { View, Text, Button,  StyleSheet } from "react-native";


export default class PlayerCardScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Player Card',
        };
    };


    render() {
        const { navigation } = this.props;


        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Player Card</Text>
            </View>
        );
    }
}
