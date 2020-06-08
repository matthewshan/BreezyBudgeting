import * as React from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Image } from 'react-native';

const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
  });

export default function Landing({budget, setBudget}) {
    if (budget == undefined) {
        let month = 0;
        let setMonthly = (value) => month = value; 
        return (
            <View style={styles.container}> 
                <Text style={styles.title}> Welcome! </Text>
                <Text style={styles.text}> To get started, please set your monthly budget</Text>
                <TextInput
                    style={styles.input}
                    placeholder="$$$"
                    type="number" /* Figure out how to get money input here */
                    onChangeText={text => setMonthly(text)}
                    defaultValue=""
                />
                <Image source={require('../assets/money.png')} style={{ width: 307.5, height: 200}}/>
                {/* Next Button here */}
            </View> 
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to React Native!</Text>
                <Text style={styles.text}>To get started, edit App.js</Text>
                <Text style={styles.text}>{instructions}</Text>
            </View>
        );
    }   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#282e2e', /* Rethink these colors. make it easy to play around */
      
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      color: '#FFFFFF',
      fontFamily: 'Roboto' /* Figure out how to import custom fonts" */
    },
    text: {
      textAlign: 'center',
      color: '#FFFFFF',
      marginBottom: 5,
    },
    input: {
        color: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 120,
        backgroundColor: '#5e5e5e',
        borderRadius: 10,
        margin: 35,
        textAlign: 'center',
    }

});