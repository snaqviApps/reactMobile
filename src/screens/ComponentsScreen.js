import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = ()=> {
  
  return <Text style={styles.textStyle}> This is the component_s screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
