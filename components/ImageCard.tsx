import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import Animated, {
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';




interface ImageCardProps {
  imageSource: ReturnType<typeof require>;
  alt?: string; // Note: alt is not used in React Native, included here for compatibility with web props
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // White background
    borderRadius: 15, // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.01,
    shadowRadius: 5,
    elevation: 3, 
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250, 
    height: 450, 
    borderRadius: 15, // rounded corners
  },
});

export default ImageCard;
