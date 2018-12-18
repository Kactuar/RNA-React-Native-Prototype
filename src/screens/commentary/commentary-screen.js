import React from "react";
import { View, Text, Button, ScrollView,  StyleSheet } from "react-native";
import getDefaultHeaderOptions from 'rootSrc/navigation/default-header-options';
import HeroImage from 'rootSrc/components/hero-image/hero-image';
import Day2live from 'rootSrc/components/day2live/day2live';
import FeedList from 'rootSrc/components/feed-list/feed-list';

export default class CommentaryScreen extends React.Component {
    static navigationOptions = (props) => {
        return {
            ...getDefaultHeaderOptions(props),
            title: 'Commentary',
        }
    };


    render() {
        const { navigation } = this.props;


        return (
            <ScrollView>
                <HeroImage uri='https://2019portrush.theopen.com/-/media/images/homepage/image-gallery/146th-spieth.jpg?mw=960&hash=82EC9751F69EC10D3F9F6C9891104A035E0CA90A' />
                <Day2live />
                <FeedList />
                <Text>Commentary Screen</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("CommentaryInner")}
                    title="Go To Commentary Inner"
                />
            </ScrollView>
        );
    }
}
