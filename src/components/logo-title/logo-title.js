import React from "react";
import { Image } from "react-native";

export default class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./img/the-open-logo2.png')}
                style={{ width: 76, height: 36 }}
            />
        );
    }
}
