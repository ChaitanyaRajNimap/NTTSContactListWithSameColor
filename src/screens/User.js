import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const User = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Welcome {item}!</Text>
      <Button title="Go to User" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2A3035',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 10,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
