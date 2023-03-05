import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.ck}>
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
    </View>
  );
}

const styles = StyleSheet.create({
  ck:{
    width:"10%",
    alignItems:"center",
    justifyContent:"center"
  }
});