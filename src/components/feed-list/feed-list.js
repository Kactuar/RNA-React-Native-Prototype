import React from "react";
import { Image, View, Text, FlatList, StyleSheet, Animated } from "react-native";
import styled, {css} from 'styled-components/native'
import colors from 'rootSrc/general/styles/colors';
import space from 'rootSrc/general/styles/space';
import FeedItem from 'rootSrc/components/feed-item/feed-item';
const data = require('./data.json');


class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
        }).start();
    }

    render() {
        return (
            <Animated.View style={[{opacity: this.state.opacity}]}>
                <FeedItem {...this.props} />
            </Animated.View>
        );
    }
};

const renderItem = ({item}) => {
    return (
            <Cell {...item} />
    );
};

export default class FeedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = data;

        setTimeout(() => (
          this.setState(previousState => {
            var list = this.state.list;
            list.unshift({
            id: 3,
            type: "simple",
            hasGradient: true,
            test: true,
            image: "https://2019portrush.theopen.com/-/media/images/hospitality/2019/open-experiences/theopenexp-portrait.png?mw=720&hash=2F1B42EC463D057F8F187D4A94195DEE3E6ABAA8",
            summary: "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id",
            title: "Excepteur sint occaecat"
            });
            return {list: list.slice(0)};
          })
        ), 5000);
    } 

    render() {
        return (
            <Container>
                <FlatList data={this.state.list} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
            </Container>
        );
    };

}



// Styles

const Container = styled.View`
    background-color: ${colors.mercury};
    padding-top: 0
`;

