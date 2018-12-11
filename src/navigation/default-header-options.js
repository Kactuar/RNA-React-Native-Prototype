import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';

const getDefaultHeaderOptions = (props) =>  {
    return {
        headerLeft: <Icon name="three-bars" size={30} color="#000" onPress={() => props.navigation.toggleDrawer()} />,
        headerLeftContainerStyle: {
            paddingLeft: 10,
        },
    }
};

export default getDefaultHeaderOptions;
