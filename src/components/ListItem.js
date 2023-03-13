import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

function ListItem({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.contactContainer}>
      <Image
        source={{
          uri: item.picture,
        }}
        style={styles.avatar}
      />
      <Text style={styles.contactText}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  contactContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#202329',
    borderColor: '#202329',
  },
  contactText: {
    marginLeft: 15,
    color: '#EBEFF1',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,
  },
});
