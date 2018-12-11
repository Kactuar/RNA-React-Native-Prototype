import React from "react";
import { View, Text, Button,  StyleSheet } from "react-native";


export default class CommentaryInnerScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Commentary Inner',
        };
    };


    render() {
        const { navigation } = this.props;


        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Commentary Inner Screen</Text>

            </View>
        );
    }
}
