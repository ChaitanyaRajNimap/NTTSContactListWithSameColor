import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card from '../components/Card';

const User = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.rootContainer}>
      <Card item={item} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#2A3035',
  },
  heading: {
    marginBottom: 10,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
