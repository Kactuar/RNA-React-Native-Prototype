import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ProfileScreen from 'rootSrc/screens/profile/profile-screen';
import ProfileInnerScreen from 'rootSrc/screens/profile/profile-inner-screen';


const StackProfile = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen
        },
        ProfileInner: {
            screen: ProfileInnerScreen
        }
    }
);

export default StackProfile;
