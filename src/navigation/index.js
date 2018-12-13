import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import colors from '../general/styles/colors';
import TabMain from './tab-main';
import StackProfile from './stack-profile';


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
