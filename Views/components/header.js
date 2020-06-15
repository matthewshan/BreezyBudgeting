import * as React from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import '../../helpers/ColorsConfig';
import { ScrollView } from 'react-native-gesture-handler';

export default function Header({budgetList, setBudgetList}) {
    return (
        <View>
            <Text style={styles.header}>Budgets</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 45,
        padding: 10,
        paddingTop: 20,
        backgroundColor: primary,
        color: background
    },
})