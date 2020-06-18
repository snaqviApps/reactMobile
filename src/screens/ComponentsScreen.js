import React from 'react'
import { Text, StyleSheet, View, Button, Alert } from 'react-native';

const ComponentsScreen = ()=> {
// const greetings = ['  Hi there',' , ','Bye there']
const greetings = "Hellow funter-man"
return (
    <View>
      <Text style={styles.textStyle}>Getting started with react-native</Text>
      <Text style={styles.s_textStyle}>{greetings}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  s_textStyle: {
    fontSize: 50,
    textAlign: 'center',
    color: 'red',
    fontStyle: 'italic'
  }
});

export default ComponentsScreen;
