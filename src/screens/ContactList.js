import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';

const ContactList = ({navigation}) => {
  const contactList = [
    {
      id: 1,
      email: 'janique.costa@example.com',
      gender: 'male',
      name: 'Janique Costa',
      phone: '(84) 5181-4592',
      picture: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
      id: 2,
      email: 'shona.mardhekar@example.com',
      gender: 'female',
      name: 'Shona Mardhekar',
      phone: '8509013653',
      picture: 'https://randomuser.me/api/portraits/women/57.jpg',
    },
    {
      id: 3,
      email: 'dominic.williams@example.com',
      gender: 'male',
      name: 'Dominic Williams',
      phone: 'H05 Y34-2403',
      picture: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      id: 4,
      email: 'mustafa.sinanoglu@example.com',
      gender: 'male',
      name: 'Mustafa Sinanoğlu',
      phone: '(995)-843-2056',
      picture: 'https://randomuser.me/api/portraits/men/73.jpg',
    },
    {
      id: 5,
      email: 'ceyhan.gonultas@example.com',
      gender: 'female',
      name: 'Ceyhan Gönültaş',
      phone: '(370)-437-0135',
      picture: 'https://randomuser.me/api/portraits/women/78.jpg',
    },
    {
      id: 6,
      email: 'augustin.puschmann@example.com',
      gender: 'male',
      name: 'Augustin Puschmann',
      phone: '0565-0509714',
      picture: 'https://randomuser.me/api/portraits/men/63.jpg',
    },
    {
      id: 7,
      email: 'anny.terjesen@example.com',
      gender: 'female',
      name: 'Anny Terjesen',
      phone: '88730963',
      picture: 'https://randomuser.me/api/portraits/women/77.jpg',
    },
    {
      id: 8,
      email: 'trigost.kulikovskiy@example.com',
      gender: 'male',
      name: 'Trigost Kulikovskiy',
      phone: '(096) U55-8022',
      picture: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
    {
      id: 9,
      email: 'ghita.pistorius@example.com',
      gender: 'female',
      name: 'Ghita Pistorius',
      phone: '(0768) 645120',
      picture: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    {
      id: 10,
      email: 'paige.stewart@example.com',
      gender: 'female',
      name: 'Paige Stewart',
      phone: '051-946-4432',
      picture: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={contactList}
        renderItem={({item}) => <ListItem item={item} onPress={() => {}} />}
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
