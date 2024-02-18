import { StyleSheet } from 'react-native';
import React, { useState, useCallback } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function HomeScreen() {
  return (
    <View style={sstyles.container}>
      <Text style={styles.title}>Outfit of the Day</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

interface SwipableCard{
  data: any; // Placeholder for your data type
  onSwipe: (direction: 'left' | 'right') => void; // Callback for swipe actions
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
