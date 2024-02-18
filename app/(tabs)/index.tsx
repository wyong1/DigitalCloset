import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import ImageCard from '@/components/ImageCard';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.overlayRectangle} />
      <Image
        source={require('../../assets/images/logo.gif')} // Corrected prop from imageSource to source
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Outfiter!</Text>
      <Text style={styles.subtitle}>your digital wardrobe</Text>
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
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  subtitle: {
    fontSize: 15,
    paddingTop: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 100,
  },
  overlayRectangle: {
    position: 'absolute',
    top: '25%', 
    width: '120%',
    height: '50%',
    backgroundColor: '#9D7C77',
    zIndex: 0, // Ensures the rectangle is behind the text
    marginLeft: '-10%', 
  },
});
