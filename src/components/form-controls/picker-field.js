import React from "react";
import {View, Text, Button, TextInput, StyleSheet, Picker} from "react-native";
import formStyles, { getPickerStyles } from 'rootSrc/general/styles/form';

const PickerField = (props) => {

    return (
        <View style={[formStyles.fieldContainer, props.fieldContainerStyles]}>
            <Picker
                selectedValue={props.values[props.valueName]}
                style={formStyles.picker}
                onValueChange={props.handleChange(props.valueName)}>
                {props.options.map((option) => (<Picker.Item label={option.label} value={option.value} key={option.value} />))}

            </Picker>
            {props.errors[props.valueName] && props.touched[props.valueName] && (
                <Text style={formStyles.fieldError}>{props.errors[props.valueName]}</Text>
            )}
        </View>
    )
};

export default PickerField;
