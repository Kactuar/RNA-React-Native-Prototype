import React from 'react';
import {Button} from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import colors from '../general/colors';
import TabMain from './tab-main';
import StackProfile from './stack-profile';

// const StackWrapOfTabMain = createStackNavigator({ TabMain }, { headerMode: "none" });



// const MainStack = createStackNavigator(
//     {
//
//         Tabs: TabMain
//     },
//     {
//         initialRouteName: "Tabs",
//         headerLayoutPreset: 'center',
//         defaultNavigationOptions: {
//
//             headerLeftContainerStyle: {
//                 paddingLeft: 10,
//             },
//             headerTitleContainerStyle: {
//                 paddingLeft: 20,
//                 paddingRight: 20,
//             },
//             headerRight: (
//                 <Button
//                     onPress={() => alert('This is a button!')}
//                     title="Info"
//                     color="#000"
//                 />
//             ),
//             headerStyle: {
//                 backgroundColor: colors.purple,
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         }
//     }
// );

const Drawer = createDrawerNavigator({
    Main: {
        screen: TabMain,
    },
    Profile: {
        screen: StackProfile
    }


}, {
    drawerBackgroundColor: colors.mystic,
});

export default Drawer;
