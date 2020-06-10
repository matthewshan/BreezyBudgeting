import * as React from 'react';
import Main from './BudgetPage';
import { Platform, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import '../helpers/ColorsConfig'
import BudgetModel from '../models/BudgetModel'

export default function Landing({budgetList, setBudgetList}) {
    if (!Array.isArray(budgetList) || !budgetList.length) {
        let month = 0;
        let setMonthly = (value) => month = value; 
        function onSubmit() {
            if (month == 0 || month < 0) {
                Alert.alert("Invalid Input", "Please enter an amount larger than 0");
            }
            else {
                Alert.alert(
                    "Confirm Amount", 
                    `Set monthly budget to $${month}`,
                    [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: 'Submit',
                            onPress: () => setBudgetList([new BudgetModel("Spent this Month", month)])
                        }
                    ]
                    )
            }
        }

        return (
            <>
                <View style={styles.container}> 
                    <Text style={styles.title}> Welcome! </Text>
                    <Text style={styles.text}> To get started, please set your monthly budget</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="$$$"
                        type="number" /* Figure out how to get money input here */
                        onChangeText={text => setMonthly(text)}
                        defaultValue=""
                        keyboardType="decimal-pad"
                        inlineImageLeft="../assets/money-bag.png"
                    />
                    <Image source={require('../assets/wallet.png')} style={{ width: 307.5, height: 200}}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Next >>></Text>
                </TouchableOpacity>
            </>
        );
    }
    else {
        return (
            <Main budgetList={budgetList} setBudgetList={setBudgetList} />
        );
    }   
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