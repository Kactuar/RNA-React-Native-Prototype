import React from "react";
import { Image, View, Text, FlatList, StyleSheet } from "react-native";
import colors from 'rootSrc/general/styles/colors';
import space from 'rootSrc/general/styles/space';

const data = {
    title: 'Day 2 live',
    list: [
        'Lorem ipsum dolor sit amet, conse1',
        'Lorem ipsum dolor sit amet, conse. Lorem ipsum dolor sit amet, conse',
        'Ullamco laboris nisi ut aliquip ex ea commodo'
    ]
};

const renderItem = ({item}) => {
    return (
        <View style={styles.item}>
            <Text>{'\u2022'}</Text>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    );
};

const Day2Live = (props) => {

    return (
        <View style={[space.px15, space.py30, styles.container]}>
            <View style={styles.head}>
                <Image
                    source={require('./img/circle2.png')}
                    style={{ width: 20, height: 21 }}
                />
                <Text style={styles.headLine}>{data.title.toUpperCase()}</Text>
            </View>

            <FlatList
                data={data.list}
                keyExtractor={(item, index) => item}
                renderItem={renderItem}
            />
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
    item: {
        flexDirection: 'row',
        marginBottom: 8
    },
    itemText: {
        flex: 1,
        paddingLeft: 5,
        fontFamily: 'roboto-bold',
    }

});

export default Day2Live;
