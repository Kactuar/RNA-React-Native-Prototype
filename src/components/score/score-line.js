import React from "react";
import { Image, View, Text, FlatList, StyleSheet } from "react-native";
import colors from 'rootSrc/general/styles/colors';

const ScoreLine = (props) => {

    return (
        <View style={styles.container}>
            <Text style={[styles.col, styles.colCenter]}>item</Text>
            <View style={[styles.col, styles.colGrow]}>
                <Text>dfgdfg</Text>
            </View>
            <View style={[styles.col, styles.colCenter]}>
                <Text style={styles.textCenter}>22</Text>
            </View>
            <View style={[styles.col, styles.colCenter]}>
                <Text style={styles.textCenter}>33</Text>
            </View>
        </View>
    );
};

export default ScoreLine;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.yellow,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
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
    }

});
