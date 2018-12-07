import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import LogoTitle from 'rootSrc/components/logo-title/logo-title';
import Icon from 'react-native-vector-icons/Octicons';

export default class HomeScreen extends React.Component {
    static navigationOptions = (props) => {
        console.log(props);
        return {
            headerTitle: <LogoTitle />,
            headerLeft: <Icon name="three-bars" size={30} color="#ffffff" onPress={() => props.navigation.toggleDrawer()} />,
        }
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
                <Text>---</Text>
                <Button
                    title="Toggle Drawer"
                    onPress={() => {this.props.navigation.toggleDrawer()}}
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
