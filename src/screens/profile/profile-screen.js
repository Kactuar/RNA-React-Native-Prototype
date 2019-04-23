import React from "react";
import {View, Text, Button, TextInput, StyleSheet, ScrollView} from "react-native";
import getDefaultHeaderOptions from 'rootSrc/navigation/default-header-options';
import LoginForm from 'rootSrc/components/login-form/login-form';
import { GlobalContextConsumer } from 'rootSrc/general/global-context'

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
                <GlobalContextConsumer>
                    {(context) => (
                    <View style={styles.container}>
                        {!context.state.isLoggedIn && (
                            <LoginForm  />
                        )}

                        {context.state.isLoggedIn && (
                            <Text>You are logged in </Text>
                        )}

                        
                    </View>
                    )}
                </GlobalContextConsumer>
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

