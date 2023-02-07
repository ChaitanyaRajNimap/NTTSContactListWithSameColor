import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';

function Card({item}) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.picture}} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.iconConatiner}>
        <TouchableOpacity>
          <Icon2 name="message1" style={[styles.icon, styles.message]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="phone" style={[styles.icon, styles.phone]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="video-camera" style={[styles.icon, styles.vdoCall]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon2 name="mail" style={[styles.icon, styles.mail]} />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailHeadingContainer}>
          <Text style={styles.detailHeading}>User Details</Text>
        </View>
        <Text style={styles.details}>Email : {item.email}</Text>
        <Text style={styles.details}>Phone Number : {item.phone}</Text>
        <Text style={styles.details}>Gender : {item.gender}</Text>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: 20,
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 35,
  },
  nameContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconConatiner: {
    padding: 30,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#202329',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 45,
    height: 45,
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  message: {
    borderColor: '#2CC15E',
    backgroundColor: '#2CC15E',
  },
  phone: {
    borderColor: '#007BFD',
    backgroundColor: '#007BFD',
  },
  vdoCall: {
    borderColor: '#F41F44',
    backgroundColor: '#F41F44',
  },
  mail: {
    borderColor: '#999DA1',
    backgroundColor: '#999DA1',
  },
  detailsContainer: {
    padding: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#2A3035',
  },
  detailHeadingContainer: {
    alignItems: 'center',
  },
  detailHeading: {
    marginBottom: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    marginBottom: 10,
    color: '#fff',
    fontSize: 16,
  },
});
