import React from "react";
import { Image, View, Text, FlatList, StyleSheet, Animated } from "react-native";
import colors from 'rootSrc/general/styles/colors';
import ScoreLine from './score-line';
const scoreData = require('./score1.json');

export default class Score extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <>
                <View style={styles.head}>
                    <Text style={styles.headText}>The Top 3 as it stands</Text>
                    <Text style={styles.headText}>12.51</Text>
                </View>
                <View style={styles.tableHead}>
                    <Text style={[styles.tableHeadText, styles.tableHeadTextCenter]}>POS</Text>
                    <Text style={[styles.tableHeadText, styles.tableHeadTextGrow]}>PLAYER</Text>
                    <Text style={[styles.tableHeadText, styles.tableHeadTextCenter]}>TO PAR</Text>
                    <Text style={[styles.tableHeadText, styles.tableHeadTextCenter]}>HOLE</Text>
                </View>
                <View style={styles.list}>
                    <FlatList data={scoreData.players}
                              renderItem={ScoreLine}
                              keyExtractor={(item) => item.id.toString()} />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        backgroundColor: colors.purple,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headText: {
        color: colors.white,
        fontSize: 12
    },
    tableHead: {
        backgroundColor: colors.purple,
        borderTopWidth: 1,
        borderTopColor: colors.comet,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tableHeadText: {
        fontSize: 10,
        color: colors.white,
        paddingLeft: 5,
        paddingRight: 5,
        width: 60
    },
    tableHeadTextCenter: {
        textAlign: 'center'
    },
    tableHeadTextGrow: {
        flex: 1
    },
    list: {
        backgroundColor: colors.yellow,
    }
});
