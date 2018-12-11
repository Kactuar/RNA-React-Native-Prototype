import React from 'react';
import { createStackNavigator } from 'react-navigation';
import WatchScreen from 'rootSrc/screens/watch/watch-screen';


const StackWatch = createStackNavigator(
    {
        Watch: {
            screen: WatchScreen
        }
    }
);

export default StackWatch;
