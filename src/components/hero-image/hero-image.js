import React from "react";
import { Image, View, Text } from "react-native";

const HeroImage = ({uri}) => {

    return (
        <View>

            <Image source={{uri: uri}}
                   style={{width: '100%', height: 400}}
                   resizeMode='cover' />
        </View>
    );
};



export default HeroImage;
