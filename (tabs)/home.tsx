import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import ImageCard from '@/components/ImageCard';
import SwipeableCard from '@/components/SwipeableCard';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}>Choose your OOTD!</Text>
        <View style={styles.cardsContainer}>
          <ImageCard
            imageSource={require('../../assets/clothPic/outfit1.png')}
            alt="Outfit"
          />
        </View>

          <TouchableOpacity style={styles.button}>
            <Icon2 name="minus-circle" size={50} color="red" style={styles.icon} />
            <Icon2 name="replay" size={50} color="grey" style={styles.icon} />
            <Icon2 name="check-circle" size={50} color="green" style={styles.icon} />
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#C1B6B4',
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9D7C77',
    marginBottom: 20,
    borderRadius: 15,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    width: '50%',
    height: '50%',
  },
  icon: {
    margin: 18,
  },
  cardsContainer: {
    // more styling
  },
});
