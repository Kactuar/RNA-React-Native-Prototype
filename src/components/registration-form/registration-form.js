import React from "react";
import { View, Text, Button, TextInput, Picker,  StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import { Formik } from 'formik';
import * as Yup from "yup";
import formStyles, { getInputStyles } from 'rootSrc/general/styles/form';
import TextField from 'rootSrc/components/form-controls/text-field';
import PickerField from 'rootSrc/components/form-controls/picker-field';
import RegistrationThankYou from './registration-thank-you';
import * as firebase from "firebase/app";
import firebaseAuth from 'firebase/auth';
import space from 'rootSrc/general/styles/space';
import { GlobalContextConsumer } from 'rootSrc/general/global-context'

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRegistrationDone: false,
            formErrorMessage: '',
            isLoading: false
        }

    }

    onFromSubmit(context, values) {
        console.log(values);
        this.setState({isLoading: true});
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password).then(()=> {
            this.setState({isRegistrationDone: true, isLoading: false});
            context.setGlobalContext({isLoggedIn: true});
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            this.setState({formErrorMessage: errorMessage, isLoading: false})
        });


    }


    render() {


        return (

            <GlobalContextConsumer>
                {(context) => (
                    <View>
                        {this.state.isRegistrationDone && (
                            <React.Fragment>
                                <RegistrationThankYou />
                                <Button
                                    onPress={() => this.props.navigation.navigate("Profile")}
                                    title="Go to profile"
                                />
                            </React.Fragment>
                        )}

                        {!this.state.isRegistrationDone && (
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    secondName: '',
                                    gender: '',
                                    email: '',
                                    password: '',
                                    passwordConfirmation: ''
                                }}
                                onSubmit={this.onFromSubmit.bind(this, context)}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                        .email('Email is not valid')
                                        .required("Email is required"),
                                    firstName: Yup.string()
                                        .required("it is required"),
                                    gender: Yup.string()
                                        .required("it is required"),
                                    password: Yup.string()
                                        .min(6, 'Should be at least 6 characters')
                                        .required("Password is required"),
                                    passwordConfirmation: Yup.string()
                                        .oneOf([Yup.ref('password'), null], "Passwords don't match")
                                        .required("Password is required"),

                                })}
                            >
                                {props => {
                                    return (
                                        <View style={formStyles.formContainer}>
                                            <TextField {...props} valueName={'firstName'} label={'First Name'} />
                                            <TextField {...props} valueName={'secondName'} label={'Second Name'} />
                                            <TextField {...props} valueName={'email'} label={'Email'} />

                                            <PickerField {...props}
                                                         valueName={'gender'}
                                                         options={[
                                                             {label:'Select gender', value:""},
                                                             {label:'Male', value:"male"},
                                                             {label:'Female', value:"female"},
                                                             {label:'Other', value:"other"}
                                                         ]}/>

                                            <TextField {...props} valueName={'password'} label={'Password'} secureTextEntry={true}/>
                                            <TextField {...props} valueName={'passwordConfirmation'} label={'Confirm Password'} secureTextEntry={true}/>

                                            {this.state.formErrorMessage.length > 0 && (
                                                <View style={[formStyles.formErrorContainer, space.mb10]}>
                                                    <Text style={formStyles.formErrorText}>{this.state.formErrorMessage}</Text>
                                                </View>
                                            )}

                                            <View style={formStyles.fieldContainer}>
                                                <Button onPress={props.handleSubmit} title="Continue" disabled={this.state.isLoading}/>
                                            </View>

                                        </View>
                                    )}}
                            </Formik>
                        )}


                    </View>
                )}
            </GlobalContextConsumer>

        );
    }
}

export default withNavigation(RegistrationForm);


