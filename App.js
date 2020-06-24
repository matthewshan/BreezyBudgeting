import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Landing from './views/landing';

export default function App() {
  const [budgetList, setBudgetList] = React.useState([]);
  const [selectedBudget, setSelectedBudget] = React.useState(0);

  return (
    <Landing budgetList={budgetList} setBudgetList={setBudgetList} 
      selectedBudget={selectedBudget} setSelectedBudget={setSelectedBudget}/>
  );
}


