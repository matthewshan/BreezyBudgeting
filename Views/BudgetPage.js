import * as React from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import '../helpers/ColorsConfig';
import { ScrollView } from 'react-native-gesture-handler';
import BudgetItem from './components/BudgetItem'

export default function BudgetPage({budgetList, setBudgetList}) {
    return (
        <ScrollView>
            {budgetList.map((budget, index) => {
                return <BudgetItem key={index} budget={budget} />
            })}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: background,
      
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
    },
    button: {
        height: 75,
        backgroundColor: primary,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: background,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});