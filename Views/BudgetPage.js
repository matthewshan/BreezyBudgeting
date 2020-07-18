import * as React from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Image, Button, Alert } from 'react-native';
import '../helpers/ColorsConfig';
import { ScrollView } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import Header from './components/header';

export default function BudgetPage({budgetList, setBudgetList, selectedBudget, setSelectedBudget}) {
 
    let budget = budgetList[selectedBudget];
    return (
        <>
            <Header />
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{budget.name}</Text>
                <Text style={styles.text}>Currenty Monthly Budget: ${budget.monthly} </Text>
                <View style={styles.spendMoneyBox}>
                  <TextInput
                              style={styles.spendMoneyInput}
                              placeholder="$$$"
                              type="number" 
                              onChangeText={() => {}}
                              defaultValue=""
                              keyboardType="decimal-pad"
                          />
                  <Button title="Spend" color={primary} style={styles.spendMoneyButton}/>
                  
                </View>
                


                {/* <Progress.Circle size={80} progress={0.5} showsText={true} color={primary}/> */}
            </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: background,
      margin: 15,
      padding: 15
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      color: text,
      fontFamily: 'NunitoBold'
    },
    text: {
      textAlign: 'center',
      color: text,
      marginBottom: 5,
      fontFamily: 'Nunito'
    },
    spendMoneyBox: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    spendMoneyInput: {
        color: primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 120,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: primary,
        margin: 15,
        textAlign: 'center',
    },
    spendMoneyButton: {
      height: 30,
      width: 30,
      backgroundColor: primary,
      padding: 10
    },
});