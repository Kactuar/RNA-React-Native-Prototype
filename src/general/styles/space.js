import { StyleSheet } from "react-native";


/*
* mx10 {
*   marginLeft: 10;
*   marginRight: 10
* }
*
* */

const labels = {
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom']
};

const values = [5, 10, 15, 20, 30, 40, 50, 60];

const resultObj = {};
const keys = Object.keys(labels);

keys.forEach((key) => {
    values.forEach((val) => {
        resultObj[`${key}${val}`] = {};
        labels[key].forEach((property) => {
            resultObj[`${key}${val}`][property] = val;
        })
    })
});


const spaces = StyleSheet.create(resultObj);

export default spaces;
