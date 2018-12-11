import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TrackScreen from 'rootSrc/screens/track/track-screen';


const StackTrack = createStackNavigator(
    {
        Track: {
            screen: TrackScreen
        }
    },

);

export default StackTrack;
