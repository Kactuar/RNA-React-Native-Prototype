import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from 'rootSrc/screens/home-screen';
import StackTrack from './stack-track';
import StackWatch from './stack-watch';
import StackScore from './stack-score';
import StackCommentary from './stack-commentary';




const TabMain = createBottomTabNavigator(
    {
        Commentary: { screen: StackCommentary },
        Score: { screen: StackScore },
        Watch: { screen: StackWatch},
        Track: { screen: StackTrack },


    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default TabMain;

