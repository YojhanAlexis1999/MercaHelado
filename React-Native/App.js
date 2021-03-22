import React from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
      />
      <TextInput
        style={styles.input}
      />
      <Button title='Ingresar' color='aqua'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});