import React from 'react'
import { Text, StyleSheet, View, Button, Alert, FlatList } from 'react-native';

const ListScreen = ()=> {                           // Component 'ListScreen' starts here, uses 'FlatList Element'
  const friends = [                                 // Needs two 'Props': 'data' and 'renderItem'
    {name: 'Friend-A'},
    {name: 'Friend-B'},
    {name: 'Friend-C'},
    {name: 'Friend-D'},
    {name: 'Friend-E'},
    {name: 'Friend-F'},
    {name: 'Friend-G'}

];
  return (
    <FlatList
    keyExtractor = {(friend) => friend.name}
    data={friends}
    // renderItem={(element) => {}} />              // Not using 'element' but it's 'prop' called 'item'
    renderItem={({ item }) => {                     // element === { item: {name: 'Friend-A'}, index: 0 }
      return <Text>{ item.name }</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
