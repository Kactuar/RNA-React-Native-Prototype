import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Text>---</Text>
                <Button
                    title="Go to Details 1"
                    onPress={() => this.props.navigation.navigate('Details', {
                        id: 1
                    })}
                />
                <Text>---</Text>
                <Button
                    title="Go to Details 2"
                    onPress={() => this.props.navigation.navigate('Details', {
                        id: 2
                    })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
