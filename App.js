import React from "react";
import { createAppContainer } from "react-navigation";
import Drawer from './src/navigation';
import { GlobalContextProvider } from 'rootSrc/general/global-context';
import FIREBASE_CONFIG from 'rootSrc/general/firebase-config';
import * as firebase from "firebase/app";
import firebaseAuth from 'firebase/auth';




const AppContainer = createAppContainer(Drawer);

export default class App extends React.Component {
    componentDidMount() {

        firebase.initializeApp(FIREBASE_CONFIG);
    }

    render() {
        return (
            <GlobalContextProvider>
                <AppContainer />
            </GlobalContextProvider>
            );
    }
}
