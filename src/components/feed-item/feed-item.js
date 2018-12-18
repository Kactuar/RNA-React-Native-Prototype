import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styled, {css} from 'styled-components/native'
import colors from 'rootSrc/general/styles/colors';
import space from 'rootSrc/general/styles/space';


const FeedItem = (props) => {
    const TextWrap = styled.View`
        margin-top: 20;
        
        ${parentProps =>
            
            props.hasGradient &&
            css`
              margin-top: -20;
            `}
    `;

    return (
        <View style={styles.container}>
            <View style={styles.imageWrap}>
                <Image
                    source={{uri: props.image}}
                    style={styles.image}
                />
                { props.hasGradient &&
                    <LinearGradient colors={['transparent', colors.bunting]} style={styles.gradient} />
                }

            </View>
            <View style={[space.px15, space.pb20, styles.caption]}>
                <TextWrap>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.summary}>{props.summary}</Text>
                </TextWrap>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    image: {
        aspectRatio: 3/2
    },
    imageWrap: {

    },
    caption: {
        backgroundColor: colors.bunting
    },
    textWrap: {
        marginTop: -20
    },
    title: {
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'roboto-bold',
        marginBottom: 15
    },
    summary: {
        color: '#ffffff',
        fontFamily: 'roboto-regular'
    },
    gradient: {
        width: '100%',
        height: 40,
        position: 'absolute',
        bottom: 0
    }

});

export default FeedItem;
