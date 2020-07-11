import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {      // ES 2015 JS for code - condensation
  // console.log(propsH.navigation);
  return (
      <View>
          <Text style={styles.StyleSheet}>How are you doing :)</Text>
          <Button
              title="Hmm here is the button"
              onPress={() => navigation.navigate('components')}
          />
          <TouchableOpacity  onPress={() => navigation.navigate('List')}>
            <Text>Go to Awiwalla </Text>
            <Text>Go to Awiwalla </Text>
            <Text>Go to Awiwalla </Text>
          </TouchableOpacity>

          <Button
              title="Go to Images Demo"
              onPress={() => navigation.navigate('Image')}
          />
        </View>
      );
  };

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
