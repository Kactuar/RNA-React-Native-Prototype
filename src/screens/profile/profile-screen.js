import React from "react";
import {View, Text, Button, TextInput, StyleSheet, ScrollView} from "react-native";
import getDefaultHeaderOptions from 'rootSrc/navigation/default-header-options';
import LoginForm from 'rootSrc/components/login-form/login-form';

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
            <ScrollView>
                <View style={styles.container}>
                    <LoginForm />
                    <Text style={{marginTop: 20}}>Profile Screen</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate("ProfileInner")}
                        title="Go To Profile Inner"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20
    }
});

