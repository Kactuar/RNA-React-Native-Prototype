import React from "react";
import { Image, View, Text, FlatList, StyleSheet } from "react-native";
import colors from 'rootSrc/general/styles/colors';
import space from 'rootSrc/general/styles/space';

const data = {
    title: 'Thank you for registration',
    summary: 'Lorem ipsum dolor sit amet, conse. Lorem ipsum dolor sit amet, conse'
};



const RegistrationThankYou = (props) => {

    return (
        <View style={[space.px15, space.py30, styles.container]}>
            <View style={styles.head}>

                <Text style={styles.headLine}>{data.title.toUpperCase()}</Text>
            </View>
            <Text style={[space.pt15, styles.summary]}>{data.summary}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.yellow,
        width: '100%'
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20

    },
    headLine: {
        fontFamily: 'theopen-headline-bold',
        fontSize: 22,
        paddingLeft: 10
    },
    summary: {
        fontSize: 16,
    },

});

export default RegistrationThankYou;
