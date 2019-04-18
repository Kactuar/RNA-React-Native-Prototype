import React from "react";
import { View, Text, Button, TextInput,  StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import { Formik } from 'formik';
import * as Yup from "yup";
import formStyles from 'rootSrc/general/styles/form';
import TextField from 'rootSrc/components/form-controls/text-field';

 class LoginForm extends React.Component {



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
                        <View style={formStyles.formContainer}>
                           
                            <TextField {...props} valueName={'email'} label={'Email'} />
                            <TextField {...props} valueName={'password'} label={'Password'} secureTextEntry={true}/>

                            <View style={formStyles.fieldContainer}>
                                <Button onPress={props.handleSubmit} title="Sign in" />
                            </View>
                            <View style={formStyles.fieldContainer}>
                                <Button
                                    onPress={() => this.props.navigation.navigate("Registration")}
                                    title="Create an account"
                                />
                            </View>
                        </View>
                    )}}
                </Formik>

            </View>
        );
    }
}

export default withNavigation(LoginForm);


