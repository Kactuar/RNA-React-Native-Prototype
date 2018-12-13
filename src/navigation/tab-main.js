import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import StackTrack from './stack-track';
import StackWatch from './stack-watch';
import StackScore from './stack-score';
import StackCommentary from './stack-commentary';
import IconScore from 'rootSrc/general/svg-components/icon-score';
import IconComment from 'rootSrc/general/svg-components/icon-comment';
import IconVideo from 'rootSrc/general/svg-components/icon-video';
import IconPin from 'rootSrc/general/svg-components/icon-pin';
import colors from 'rootSrc/general/styles/colors';



const TabMain = createMaterialTopTabNavigator(
    {
        Commentary: {
            screen: StackCommentary,
            navigationOptions: {
                title: "Commentary",
                tabBarIcon: ({ tintColor }) => (
                    <IconComment width={17} height={16} fill={tintColor} />
                )
            }
        },
        Score: {
            screen: StackScore,
            navigationOptions: {
                title: "Score",
                tabBarIcon: ({ tintColor }) => (
                    <IconScore width={17} height={14} fill={tintColor} />
                )
            }
        },
        Watch: {
            screen: StackWatch,
            navigationOptions: {
                title: "Watch",
                tabBarIcon: ({ tintColor }) => (
                    <IconVideo width={17} height={13} fill={tintColor} />
                )
            }
        },
        Track: {
            screen: StackTrack,
            navigationOptions: {
                title: "Track",
                tabBarIcon: ({ tintColor }) => (
                    <IconPin width={13} height={20} fill={tintColor} />
                )
            }
        },


    },
    {
        swipeEnabled: false,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            activeTintColor: colors.yellow,
            inactiveTintColor: colors.frenchGrey,
            indicatorStyle: {
                backgroundColor: colors.yellow
            },
            style: {
                backgroundColor: colors.purple,
                paddingBottom: 2,
                paddingTop: 2
            },
            labelStyle: {
                fontFamily: 'roboto-regular',
                fontSize: 10
            }
        },
    }
);

export default TabMain;

