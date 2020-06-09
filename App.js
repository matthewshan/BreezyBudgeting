import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Landing from './views/landing';

export default function App() {
  const [budget, setBudget] = React.useState(undefined);

  return (
    <Landing budget={budget} setBudget={setBudget}/>
  );
}


