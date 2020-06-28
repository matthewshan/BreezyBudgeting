import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Landing from './views/landing';

export default function App() {
  await Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    Nunito: require("./assets/fonts/Nunito/Nunito-Regular.ttf")
  });

  const [budgetList, setBudgetList] = React.useState([]);
  const [selectedBudget, setSelectedBudget] = React.useState(0);

  return (
    <Landing budgetList={budgetList} setBudgetList={setBudgetList} 
      selectedBudget={selectedBudget} setSelectedBudget={setSelectedBudget}/>
  );
}


