import React from "react";
import { Image, View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from "react-native";
import colors from 'rootSrc/general/styles/colors';
import space from 'rootSrc/general/styles/space';

export default class FeedButtons extends React.Component { 
   constructor(props) {
	    super(props);
	    this.state = { tab: 1 };
   }

   render() {
    return (
        <View style={[space.px15, space.py30, styles.container, {flexDirection: 'row'}]}>
        	<TouchableOpacity onPress={() => this.setState({ tab: 1 })}
        	    style={[styles.buttonLeft, space.py10, this.state.tab == 1 ? styles.selected : styles.unselected]}>
        		<Text style={[styles.text, this.state.tab == 1 ? styles.selectedText : styles.unselectedText]}>Live Text</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ tab: 2 })} 
            	style={[styles.buttonRight, space.py10, this.state.tab == 2 ? styles.selected : styles.unselected]}>
        		<Text style={[styles.text, this.state.tab == 2 ? styles.selectedText : styles.unselectedText]}>Analysis</Text>
            </TouchableOpacity>
        </View>
    );
   }

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: '100%'
    },
    buttonLeft: {
    	flex: 1,

    	borderTopLeftRadius: 20,
    	borderBottomLeftRadius: 20,
    },
    buttonRight: {
    	flex: 1,
    	borderTopRightRadius: 20,
    	borderBottomRightRadius: 20,
    },
    text: {
		fontFamily: 'roboto-bold',    	
    	textAlign: 'center'
    },
    selected: {
    	backgroundColor: colors.purple,
    },
    selectedText: {
    	color: colors.white
    },
    unselected: {
    	backgroundColor: colors.white,
    	borderColor: colors.purple,
    	borderWidth: 1,
    },
    unselectedText: {
    	color: colors.purple
    },
});
