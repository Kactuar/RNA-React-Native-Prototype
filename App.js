import React from "react";
import { createAppContainer } from "react-navigation";
import Drawer from './src/navigation';
import { GlobalContextProvider } from 'rootSrc/general/global-context'


const AppContainer = createAppContainer(Drawer);

export default class App extends React.Component {
    render() {
        return (
            <GlobalContextProvider>
                <AppContainer />
            </GlobalContextProvider>
            );
    }
}
