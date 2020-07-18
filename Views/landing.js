import * as React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Main from './BudgetPage';
import { Platform, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import '../helpers/ColorsConfig'
import BudgetModel from '../models/BudgetModel'


export default function Landing({ budgetList, setBudgetList, selectedBudget, setSelectedBudget}) {
    const fetchFonts = async () => {
        return await Font.loadAsync({
            Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
            RobotoBold: require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
            Nunito: require('../assets/fonts/Nunito/Nunito-Regular.ttf'),
            NunitoBold: require('../assets/fonts/Nunito/Nunito-Bold.ttf'),

        });
    };
    const [dataLoaded, setDataLoaded] = React.useState(false);

    if (!dataLoaded) {
        return <AppLoading startAsync={fetchFonts} 
                    onFinish={() => setDataLoaded(true)} />;
    } else {
        let styles = getStyles();
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
                                onPress: () => setBudgetList([new BudgetModel("Main Budget", month)])
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
                            inlineImageLeft="../assets/images/money-bag.png"
                        />
                        <Image source={require('../assets/images/wallet.png')} style={{ width: 307.5, height: 200 }} />
                    </View>
                    <TouchableOpacity style={styles.nextButton} onPress={onSubmit}>
                        <Text style={styles.nextButtonText}>Next >>></Text>
                    </TouchableOpacity>
                </>
            );
        }
        else {
            return (
                <Main budgetList={budgetList} setBudgetList={setBudgetList}
                    selectedBudget={selectedBudget} setSelectedBudget={setSelectedBudget} />
            );
        }
    }
}

const getStyles = () => StyleSheet.create({
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
        fontFamily: 'NunitoBold'
    },
    text: {
        textAlign: 'center',
        color: text,
        marginBottom: 5,
        fontFamily: 'Nunito',
        fontSize: 16
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
    nextButton: {
        height: 75,
        backgroundColor: primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButtonText: {
        fontFamily: 'NunitoBold',
        fontSize: 20,
        color: background,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});