import React from "react";
import { Image, View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import styled, {css} from 'styled-components/native'
import colors from 'rootSrc/general/styles/colors';
import space from 'rootSrc/general/styles/space';
import IconTriangle from 'rootSrc/general/svg-components/icon-triangle';


export default class FeedItem extends React.Component  {

    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
        this.state = {
            paused: true
        }

    }

    onPress() {
        this.setState((oldState)=> {
            return {
                paused: !oldState.paused
            }
        });
    }

    render() {
        const props = this.props;
        console.log(props);


        return (
            <Container>
                <View style={styles.imageWrap}>
                    {!props.video &&
                        <MainImage
                            source={{uri: props.image}}
                        />
                    }

                    {props.video &&
                    <>
                        <Video
                            poster={this.state.paused ? props.image : undefined}

                            posterResizeMode="cover"
                            resizeMode="contain"
                            paused={this.state.paused}
                            controls={true}
                            style={styles.video}
                            source={require('assets/video/1.mp4')} />
                        <VideoButton onPress={this.onPress}>
                            <IconTriangle style={styles.playIcon}  width={18} height={20} fill='#ffffff'/>
                        </VideoButton>
                    </>
                    }
                    {props.hasGradient &&
                    <LinearGradient colors={['transparent', colors.bunting]} style={styles.gradient}/>
                    }

                </View>
                <Caption>
                    <TextWrap hasGradient={props.hasGradient} >
                        <Title>{props.title}</Title>
                        <Summary>{props.summary}</Summary>
                    </TextWrap>
                </Caption>
            </Container>
        );
    }
};


const Container = styled.View`
        width: 100%
    `;

const MainImage = styled.Image`
        aspectRatio: ${16/9}
    `;

const Caption = styled.View`
        background-color: ${colors.bunting};
        padding-left: 15;
        padding-right: 15;
        padding-bottom: 20;
    `;

const Title = styled.Text`
        color: #ffffff;
        font-size: 15;
        font-family: 'roboto-bold';
        margin-bottom: 15;
    `;

const Summary = styled.Text`
        color: #ffffff;
        font-family: 'roboto-regular';
    `;

const VideoButton = styled.TouchableOpacity`
        position: absolute;
        top: 0;
        right: 0;
        width: 40;
        height: 40;
        background-color: ${colors.blue};
        align-items: center;
        justify-content: center;
    `;

const TextWrap = styled.View`
        margin-top: 20;
        
        ${props =>
            props.hasGradient &&
            css`
              margin-top: -20;
            `}
        `;

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: 40,
        position: 'absolute',
        bottom: 0
    },
    imageWrap: {
        aspectRatio: 16/9

    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }


});


