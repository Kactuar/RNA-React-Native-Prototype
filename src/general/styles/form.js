import { StyleSheet } from "react-native";
import colors from './colors';

const formStyles = StyleSheet.create({
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
        color: colors.errorRed,
        paddingTop: 5
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10

    },
    input_invalid: {
        borderColor: colors.errorRed
    },
    picker: {
        height: 40,
    },
    picker_invalid: {
        color: colors.errorRed
    },
    formErrorContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderLeftWidth: 4,
        borderLeftColor: colors.errorRed
    },
    formErrorText: {
        color: colors.errorRed
    }
});
formStyles.invalidInput = StyleSheet.flatten([formStyles.input, formStyles.input_invalid]);
formStyles.invalidPicker = StyleSheet.flatten([formStyles.picker, formStyles.picker_invalid]);

export const getInputStyles = (error, isTouched) => {
    return typeof error === 'string' && error.length && isTouched ? formStyles.invalidInput : formStyles.input
};

export const getPickerStyles = (error, isTouched) => {
    return typeof error === 'string' && error.length && isTouched ? formStyles.invalidPicker : formStyles.picker
};


export default formStyles;

