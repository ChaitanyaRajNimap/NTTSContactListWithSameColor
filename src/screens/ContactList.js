import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import axios from 'axios';
import ListItem from '../components/ListItem';

const ContactList = ({navigation}) => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(
          'https://randomuser.me/api/?seed=1&page=1&results=20',
        );
        console.log('RESPONSE : ', response.data.results);
        +setContacts(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getContacts();
  }, []);

  const handleClick = item => {
    let fullName = `${item.name.first} ${item.name.last}`;
    return navigation.navigate('User', {
      item: fullName,
    });
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={contacts}
        renderItem={({item}) => (
          <ListItem
            item={item}
            onPress={() => {
              return handleClick(item);
            }}
          />
        )}
        keyExtractor={item => item.email}
        style={styles.flatlist}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#2A3035',
  },
  heading: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  flatlist: {
    marginVertical: 20,
  },
});
