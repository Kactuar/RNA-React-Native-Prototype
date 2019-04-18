import React from "react";
import { View, Text, Button, TextInput, Picker,  StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import { Formik } from 'formik';
import * as Yup from "yup";
import formStyles, { getInputStyles } from 'rootSrc/general/styles/form';
import TextField from 'rootSrc/components/form-controls/text-field';
import PickerField from 'rootSrc/components/form-controls/picker-field';

 class RegistrationForm extends React.Component {



    render() {


        return (
            <View>
                <Formik
                    initialValues={{
                        firstName: '',
                        secondName: '',
                        gender: '',
                        email: '',
                        password: '',
                        passwordConfirmation: ''
                    }}
                    onSubmit={values => console.log(values)}
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
                            .oneOf([Yup.ref('email'), null], "Passwords don't match")

                    })}
                >
                    {props => {
                        console.log(props);
                        return (
                        <View style={formStyles.formContainer}>
                            <TextField {...props} valueName={'firstName'} label={'First Name'} />
                            <TextField {...props} valueName={'secondName'} label={'Second Name'} />

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


                            <View style={formStyles.fieldContainer}>
                                <Button onPress={props.handleSubmit} title="Continue" />
                            </View>

                        </View>
                    )}}
                </Formik>

            </View>
        );
    }
}

export default withNavigation(RegistrationForm);


