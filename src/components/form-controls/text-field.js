import React from "react";
import { View, Text, Button, TextInput,  StyleSheet } from "react-native";
import formStyles, { getInputStyles } from 'rootSrc/general/styles/form';

const TextField = (props) => {

    return (
        <View style={[formStyles.fieldContainer, props.fieldContainerStyles]}>
            <Text style={[formStyles.label, props.labelStyles]}>{props.label}:</Text>
            <TextInput style={getInputStyles(props.errors[props.valueName], props.touched[props.valueName])}
                       onChangeText={props.handleChange(props.valueName)}
                       onBlur={props.handleBlur(props.valueName)}
                       value={props.values[props.valueName]}
                       secureTextEntry={props.secureTextEntry}
            />
            {props.errors[props.valueName] && props.touched[props.valueName] && (
                <Text style={formStyles.fieldError}>{props.errors[props.valueName]}</Text>
            )}
        </View>
    )
};

export default TextField;
