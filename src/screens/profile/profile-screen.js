import React from "react";
import {View, Text, Button, TextInput, StyleSheet, ScrollView, Image} from "react-native";
import getDefaultHeaderOptions from 'rootSrc/navigation/default-header-options';
import LoginForm from 'rootSrc/components/login-form/login-form';
import { GlobalContextConsumer } from 'rootSrc/general/global-context'
import spaces from 'rootSrc/general/styles/space';

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
                            <React.Fragment>
                                <Text style={spaces.mb20}>Hi {context.state.userInfo.firstName}. You are logged in.</Text>
                                <Image
                                    source={{uri: context.state.userInfo.avatarUrl}}
                                    style={{ width: 200, height: 200 }}
                                />
                            </React.Fragment>
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

