import * as React from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import '../../helpers/ColorsConfig';

export default function BudgetItem({budget}) {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>{budget.name}</Text>
                <Text style={styles.text}>Currenty Monthly Budget: ${budget.monthly} </Text>
                {/* <TouchableOpacity style={styles.button} onPress={() => setBudgetList([])}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: background,
      borderWidth: 1  ,
      margin: 5
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      marginTop: 50,
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