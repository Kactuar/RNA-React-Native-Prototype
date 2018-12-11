import React from "react";
import { View, Text, Button,  StyleSheet } from "react-native";
import getDefaultHeaderOptions from 'rootSrc/navigation/default-header-options';

export default class TrackScreen extends React.Component {
    static navigationOptions = (props) => {
        return {
            ...getDefaultHeaderOptions(props),
            title: 'Track',
        }
    };


    render() {
        const { navigation } = this.props;


        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Track Screen</Text>

            </View>
        );
    }
}
