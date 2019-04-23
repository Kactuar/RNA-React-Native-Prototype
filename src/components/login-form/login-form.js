import React from "react";
import {View, Text, Button, TextInput, StyleSheet, ScrollView} from "react-native";
import { withNavigation } from 'react-navigation';
import { Formik } from 'formik';
import * as Yup from "yup";
import formStyles from 'rootSrc/general/styles/form';
import TextField from 'rootSrc/components/form-controls/text-field';
import * as firebase from "firebase/app";
import firebaseAuth from 'firebase/auth';
import space from 'rootSrc/general/styles/space';
import { GlobalContextConsumer } from 'rootSrc/general/global-context'

 class LoginForm extends React.Component {


     constructor(props) {
         super(props);

         this.state = {
             formErrorMessage: '',
             isLoading: false
         }

     }

     onFromSubmit(context, values) {

         this.setState({isLoading: true});
         firebase.auth().signInWithEmailAndPassword(values.email, values.password).then((result)=> {

             this.setState({isLoading: false});
             context.setGlobalContext({
                 isLoggedIn: true,
                 userInfo: {
                     firstName: result.user.displayName,
                     avatarUrl: result.user.photoURL
                 }});
         }).catch((error) => {
             console.log(error);
             const errorMessage = error.message;
             this.setState({isLoading: false, formErrorMessage: errorMessage})
         });
     }

    render() {


        return (

                <GlobalContextConsumer>
                    {(context) => (
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={this.onFromSubmit.bind(this, context)}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email('Email is not valid')
                                    .required("Email is required"),
                                password: Yup.string()
                                    .required("Password is required")
                            })}
                        >
                            {props => {
                                return (
                                    <View style={formStyles.formContainer}>

                                        <TextField {...props} valueName={'email'} label={'Email'} />
                                        <TextField {...props} valueName={'password'} label={'Password'} secureTextEntry={true}/>

                                        {this.state.formErrorMessage.length > 0 && (
                                            <View style={[formStyles.formErrorContainer, space.mb10]}>
                                                <Text style={formStyles.formErrorText}>{this.state.formErrorMessage}</Text>
                                            </View>
                                        )}

                                        <View style={formStyles.fieldContainer}>
                                            <Button onPress={props.handleSubmit} title="Sign in" disabled={this.state.isLoading} />
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
                    )}
                </GlobalContextConsumer>



        );
    }
}

export default withNavigation(LoginForm);


