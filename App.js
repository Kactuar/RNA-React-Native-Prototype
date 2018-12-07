import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/home-screen';
import DetailsScreen from './src/screens/details-screen';
import colors from './src/general/colors.js';



const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        }
    },
    {
        initialRouteName: "Home",
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {

            headerLeftContainerStyle: {
                paddingLeft: 10,
            },
            headerTitleContainerStyle: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            headerRight: (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#000"
                />
            ),
            headerStyle: {
                backgroundColor: colors.purple,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const Drawer = createDrawerNavigator({
    Home: {
        screen: MainStack
    },

    Details: {
        screen: DetailsScreen,
    },

}, {
    drawerBackgroundColor: colors.mystic,
});


const AppContainer = createAppContainer(Drawer);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
