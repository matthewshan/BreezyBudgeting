import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Landing from './views/landing';

export default function App() {
  const [budgetList, setBudgetList] = React.useState([]);

  return (
    <Landing budgetList={budgetList} setBudgetList={setBudgetList}/>
  );
}


