import React from "react";
import { View, Text, Button,  StyleSheet } from "react-native";
import getDefaultHeaderOptions from 'rootSrc/navigation/default-header-options';

export default class CommentaryScreen extends React.Component {
    static navigationOptions = (props) => {
        return {
            ...getDefaultHeaderOptions(props),
            title: 'Commentary',
        }
    };


    render() {
        const { navigation } = this.props;


        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Commentary Screen</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("CommentaryInner")}
                    title="Go To Commentary Inner"
                />
            </View>
        );
    }
}
