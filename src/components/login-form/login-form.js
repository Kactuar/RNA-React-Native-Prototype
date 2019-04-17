import React from "react";
import { View, Text, Button, TextInput,  StyleSheet } from "react-native";

import { Formik } from 'formik';
import * as Yup from "yup";

export default class LoginForm extends React.Component {

    getInputStyles(error, isTouched) {
        return typeof error === 'string' && isTouched ? styles.invalidInput : styles.input
    }

    render() {


        return (
            <View>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => console.log(values)}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email('Email is not valid')
                            .required("Email is required"),
                        password: Yup.string()
                            .required("Password is required")
                    })}
                >
                    {props => {
                        console.log(props);
                        return (
                        <View style={styles.formContainer}>
                            <View style={styles.fieldContainer}>
                                <Text style={styles.label}>Email:</Text>
                                <TextInput style={this.getInputStyles(props.errors.email, props.touched.email)}
                                           onChangeText={props.handleChange('email')}
                                           onBlur={props.handleBlur('email')}
                                           value={props.values.email}
                                />
                                {props.errors.email && props.touched.email && (
                                    <Text style={styles.fieldError}>{props.errors.email}</Text>
                                )}
                            </View>
                            <View style={styles.fieldContainer}>
                                <Text style={styles.label}>Password:</Text>
                                <TextInput style={this.getInputStyles(props.errors.password, props.touched.password)}
                                           onChangeText={props.handleChange('password')}
                                           onBlur={props.handleBlur('password')}
                                           value={props.values.password}
                                           secureTextEntry={true}
                                />
                                {props.errors.password && props.touched.password && (
                                    <Text style={styles.fieldError}>{props.errors.password}</Text>
                                )}

                            </View>
                            <Button onPress={props.handleSubmit} title="Submit" />
                        </View>
                    )}}
                </Formik>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',

    },
    fieldContainer: {
        paddingBottom: 10
    },
    label: {
        paddingBottom: 5
    },
    fieldError: {
        color: 'red',
        paddingTop: 5
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray'
    },
    input_invalid: {
        borderColor: 'red'
    }
});
styles.invalidInput = StyleSheet.flatten([styles.input, styles.input_invalid]);
