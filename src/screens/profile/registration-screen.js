import React from "react";
import {View, Text, Button, StyleSheet, ScrollView} from "react-native";
import RegistrationForm from 'rootSrc/components/registration-form/registration-form'


export default class RegistrationScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Registration',
        };
    };


    render() {
        const { navigation } = this.props;


        return (
            <ScrollView>
                <View style={styles.container}>
                    <RegistrationForm />
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
