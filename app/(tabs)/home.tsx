import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

//constant map of all the outfits for the day generated
const imageSources = {
  outfit1: require('../../assets/clothPic/outfit1.png'),
  outfit2: require('../../assets/clothPic/outfit2.png'),
  outfit3: require('../../assets/clothPic/outfit3.png'),
};


interface SwipeableCardProps {
  onSwipe: (direction: 'left' | 'right') => void;
  children: React.ReactNode;
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({ onSwipe, children }) => {
  return (
    <TouchableOpacity onPress={() => onSwipe('right')} style={{ flex: 1 }}>
      {children}
    </TouchableOpacity>
  );
};

interface PictureCardProps {
  imageKey: keyof typeof imageSources; // Use the keys of the imageSources object
  title: string;
  description: string;
}

const PictureCard: React.FC<PictureCardProps> = ({ imageKey, title, description }) => {
  const imageSource = imageSources[imageKey];

  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={imageSource} style={{ width: '300%', height: 200 }} resizeMode="contain" />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{title}</Text>
      <Text style={{ fontSize: 14, marginTop: 5 }}>{description}</Text>
    </View>
  );
};

export default function HomeScreen() {
  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Outfit of the Day</Text>
      <View style={styles.separator} />
      <SwipeableCard onSwipe={handleSwipe}>
      <PictureCard
        imageKey="outfit1" // This key should match one of the keys in the imageSources object
        title="Example Picture"
        description="This is an example of a picture in a swipeable card."
      />
    </SwipeableCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#eee', // Use a solid color for the separator
  },
});
