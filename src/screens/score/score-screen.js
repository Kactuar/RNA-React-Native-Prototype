import React from 'react';
import { View, Text, Button,  StyleSheet, ScrollView } from 'react-native';
import getDefaultHeaderOptions from 'rootSrc/navigation/default-header-options';
import Score from 'rootSrc/components/score/score';


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
            <ScrollView>
                <Score />
                <Button
                    onPress={() => this.props.navigation.navigate("PlayerCard")}
                    title="Go To Player Card"
                />
            </ScrollView>
        );
    }
}
