import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (propsH) => {
  // console.log(propsH.navigation);
  return (
      <View>
          <Text style={styles.StyleSheet}>How are you doing :)</Text>
          <Button
              onPress={() => propsH.navigation.navigate('List')}
              title="Hmm here is the button"
          />
          <TouchableOpacity  onPress={() => console.log('List pressed')}>
            <Text>Go to Awallah </Text>
            <Text>Go to Awallah </Text>
            <Text>Go to Awallah </Text>
          </TouchableOpacity>
        </View>
      );
  };

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
