import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ProfileScreen from 'rootSrc/screens/profile/profile-screen';
import ProfileInnerScreen from 'rootSrc/screens/profile/profile-inner-screen';
import RegistrationScreen from 'rootSrc/screens/profile/registration-screen';


const StackProfile = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen
        },
        ProfileInner: {
            screen: ProfileInnerScreen
        },
        Registration: {
            screen: RegistrationScreen
        },
    }
);

export default StackProfile;
