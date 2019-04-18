import { StyleSheet } from "react-native";

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
        color: 'red',
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
        borderColor: 'red'
    },
    picker: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
    },
    picker_invalid: {
        borderColor: 'red'
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

