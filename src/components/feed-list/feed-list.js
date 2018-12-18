import React from "react";
import { Image, View, Text, FlatList, StyleSheet } from "react-native";
import styled, {css} from 'styled-components/native'
import colors from 'rootSrc/general/styles/colors';
import space from 'rootSrc/general/styles/space';
import FeedItem from 'rootSrc/components/feed-item/feed-item';
const data = require('./data.json');

const renderItem = ({item}) => {
    return (
        <View style={space.mt15}>
            <FeedItem {...item} />
        </View>
    );
};

const FeedList = (props) => {

    return (
        <Container>
            <Text>{data.title}</Text>
            <FlatList data={data.list} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
        </Container>
    );
};

export default FeedList;


// Styles

const Container = styled.View`
    background-color: ${colors.mercury};
    padding-top: 30
`;

