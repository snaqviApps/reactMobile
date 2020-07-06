import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {      // ES 2015 JS for code - condensation
  // console.log(propsH.navigation);
  return (
      <View>
          <Text style={styles.StyleSheet}>How are you doing :)</Text>
          <Button
              onPress={() => navigation.navigate('components')}
              title="Hmm here is the button"
          />
          <TouchableOpacity  onPress={() => navigation.navigate('List')}>
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
