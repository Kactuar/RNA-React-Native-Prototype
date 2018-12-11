import React from "react";
import { createAppContainer } from "react-navigation";
import Drawer from './src/navigation';


const AppContainer = createAppContainer(Drawer);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
