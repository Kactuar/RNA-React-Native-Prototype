import React from 'react';
import { View, Text, Button,  StyleSheet } from 'react-native';
import getDefaultHeaderOptions from 'rootSrc/navigation/default-header-options';


export default class ScoreScreen extends React.Component {
    static navigationOptions = (props) => {
        return {
            ...getDefaultHeaderOptions(props),
            title: 'Score',
        }
    };


    render() {
        const { navigation } = this.props;


        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Score Screen</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("PlayerCard")}
                    title="Go To Player Card"
                />

            </View>
        );
    }
}
