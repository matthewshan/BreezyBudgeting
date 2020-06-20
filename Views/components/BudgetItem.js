import * as React from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import * as Progress from 'react-native-progress';
import '../../helpers/ColorsConfig';

export default function BudgetItem({budget}) {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>{budget.name}</Text>
                <Text style={styles.text}>Currenty Monthly Budget: ${budget.monthly} </Text>
                <Progress.Circle size={80} progress={0.5} showsText={true} color={primary}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: background,
      borderWidth: 1,
      margin: 15,
      borderRadius: 12,
      padding: 15
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      color: text,
      fontFamily: 'Roboto' /* Figure out how to import custom fonts" */
    },
    text: {
      textAlign: 'center',
      color: text,
      marginBottom: 5,
    },
    input: {
        color: primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 120,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: primary,
        margin: 35,
        textAlign: 'center',
    }
});