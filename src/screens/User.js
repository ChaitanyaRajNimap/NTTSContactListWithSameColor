import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const User = ({navigation}) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>User Screen</Text>
      <Button title="Go to User" onPress={() => navigation.navigate('User')} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
