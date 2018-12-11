import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ScoreScreen from 'rootSrc/screens/score/score-screen';
import PlayerCardScreen from 'rootSrc/screens/score/player-card-screen';


const StackScore = createStackNavigator(
    {
        Score: {
            screen: ScoreScreen
        },
        PlayerCard: {
            screen: PlayerCardScreen
        }
    },

);

export default StackScore;
