import React from 'react';
import { createStackNavigator } from 'react-navigation';
import CommentaryScreen from 'rootSrc/screens/commentary/commentary-screen';
import CommentaryInnerScreen from 'rootSrc/screens/commentary/commentary-inner-screen';


const StackCommentary = createStackNavigator(
    {
        Commentary: {
            screen: CommentaryScreen
        },
        CommentaryInner: {
            screen: CommentaryInnerScreen
        }
    },

);

export default StackCommentary;
