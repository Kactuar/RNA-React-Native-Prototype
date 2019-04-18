import React from "react";

const GlobalContext = React.createContext();

export class GlobalContextProvider extends React.Component {
    state = {
        isLoggedIn: false
    };
    render() {
        return (
            <GlobalContext.Provider value={{
                state: this.state,
                setGlobalContext: (obj) => this.setState(obj)
            }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export const GlobalContextConsumer = GlobalContext.Consumer;
