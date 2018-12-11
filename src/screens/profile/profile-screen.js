import React from "react";
import { View, Text, Button,  StyleSheet } from "react-native";
import getDefaultHeaderOptions from 'rootSrc/navigation/default-header-options';

export default class ProfileScreen extends React.Component {
    static navigationOptions = (props) => {
        return {
            ...getDefaultHeaderOptions(props),
            title: 'Profile',
        }
    };


    render() {
        const { navigation } = this.props;


        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile Screen</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("ProfileInner")}
                    title="Go To Profile Inner"
                />
            </View>
        );
    }
}
