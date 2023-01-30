import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ContactList = ({navigation}) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>ContactList Screen</Text>
      <Button
        title="Go to User"
        onPress={() => navigation.navigate('ContactList')}
      />
    </View>
  );
};

export default ContactList;

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
