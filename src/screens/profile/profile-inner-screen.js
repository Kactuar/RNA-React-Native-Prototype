import React from "react";
import { View, Text, Button,  StyleSheet } from "react-native";


export default class ProfileInnerScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Profile Inner',
        };
    };


    render() {
        const { navigation } = this.props;


        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile Inner Screen</Text>

            </View>
        );
    }
}
