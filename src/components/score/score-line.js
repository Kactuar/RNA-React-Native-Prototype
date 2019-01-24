import React from "react";
import { Image, View, Text, FlatList, StyleSheet } from "react-native";
import colors from 'rootSrc/general/styles/colors';
import flags from 'rootSrc/general/flags';

const ScoreLine = (props) => {
    const {pos, name, surname, toPar, hole, country} = props.item;



    return (
        <View style={styles.container}>
            <Text style={[styles.col, styles.colCenter]}>{pos}</Text>
            <View style={[styles.col, styles.mainCol]}>
                <Image
                    source={flags[country]}
                    style={styles.flag}
                />
                <Text>{name.toUpperCase()}, {surname}</Text>
            </View>
            <View style={[styles.col, styles.colCenter]}>
                <Text style={styles.textCenter}>{toPar}</Text>
            </View>
            <View style={[styles.col, styles.colCenter]}>
                <Text style={styles.textCenter}>{hole}</Text>
            </View>
        </View>
    );
};

export default ScoreLine;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    col: {
        width: 60,
        paddingLeft: 5,
        paddingRight: 5,
    },
    colGrow: {
        flex: 1
    },
    colCenter: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    textCenter: {
        textAlign: 'center',
    },
    mainCol: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    flag: {
        width: 20,
        height: 13,
        marginRight: 10
    }

});
