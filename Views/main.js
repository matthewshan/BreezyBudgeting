import * as React from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import '../helpers/ColorsConfig';

export default function Main({budget, setBudget}) {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Currenty Monthly Budget: ${budget} </Text>
                <TouchableOpacity style={styles.button} onPress={() => setBudget(undefined)}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
        </View>
    )
}