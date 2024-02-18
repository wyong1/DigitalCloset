import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import Animated, {
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25; // Swipe threshold to consider it a swipe

interface CardProps {
  imageSource: any; // Adjust according to your image source type
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSource, title, description }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

interface SwipeableCardsProps {
  data: CardProps[]; // array of objects with imageSource, title, and description
}

interface GestureHandlerContext {
  startX: number;
}

const SwipeableCards: React.FC<SwipeableCardsProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, GestureHandlerContext>({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: (_) => {
      if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
        // swipe 
        translateX.value = withSpring(translateX.value > 0 ? SCREEN_WIDTH : -SCREEN_WIDTH, {}, () => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          translateX.value = 0; // reset position for the next card
        });
      } else {
        // return card to original position
        translateX.value = withSpring(0);
      }
    },
  });
  

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        if (index < currentIndex) {
          return null;
        }
        if (index === currentIndex) {
          return (
            <PanGestureHandler key={index} onGestureEvent={panGestureEvent}>
              <Animated.View style={[styles.animatedCard, animatedStyle]}>
                <Card {...item} />
              </Animated.View>
            </PanGestureHandler>
          );
        }
        return (
          <View key={index} style={styles.cardBehind}>
            <Card {...item} />
          </View>
        );
      }).reverse()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedCard: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: SCREEN_WIDTH * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: -60, // overlap cards
  },
  cardBehind: {
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default SwipeableCards;
