import React from "react";
import { View, Text, Button,  StyleSheet } from "react-native";


export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Details ${navigation.getParam('id', 'NO-ID')}`
        };
    };


    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID');

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Text>ID: {id}</Text>
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({id: 'Updated!'})}
                />
            </View>
        );
    }
}
