import React from 'react';
import { StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SlideableBlocks() {
  return (
    <ScrollView style={styles.container}>
      <Swiper
        style={[styles.swiperContainer, { height: height * 0.2 }]}
        showsButtons={false}
        loop={false}
        horizontal={true} // Ensure horizontal scrolling
      >
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/jacket1.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/jacket2.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/jacket3.png')}
            style={styles.image}
          />
        </View>
        {/* Add more slides for other blocks if needed */}
      </Swiper>

      <Swiper
        style={[styles.swiperContainer, { height: height * 0.2 }]}
        showsButtons={false}
        loop={false}
        horizontal={true} // Ensure horizontal scrolling
      >
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/shirt1.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/shirt2.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/shirt3.png')}
            style={styles.image}
          />
        </View>
        {/* Add more slides for other blocks if needed */}
      </Swiper>
      <Swiper
        style={[styles.swiperContainer, { height: height * 0.2}]}
        showsButtons={false}
        loop={false}
        horizontal={true} // Ensure horizontal scrolling
      >
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/bag1.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/bag2.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/bag3.png')}
            style={styles.image}
          />
        </View>
        {/* Add more slides for other blocks if needed */}
      </Swiper>


      <Swiper
        style={[styles.swiperContainer, { height: height * 0.2 }]}
        showsButtons={false}
        loop={false}
        horizontal={true} // Ensure horizontal scrolling
      >
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/pants1.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/pants2.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/pants3.png')}
            style={styles.image}
          />
        </View>
        {/* Add more slides for other blocks if needed */}
      </Swiper>
      <Swiper
        style={[styles.swiperContainer, { height: height * 0.1 }]}
        showsButtons={false}
        loop={false}
        horizontal={true} // Ensure horizontal scrolling
      >
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/shoes1.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/shoes2.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/clothPic/shoes3.png')}
            style={styles.image}
          />
        </View>
        {/* Add more slides for other blocks if needed */}
      </Swiper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1B6B4',
  },
  swiperContainer: {
    height: height * 0.3,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    aspectRatio: 0.2, // Adjust the aspect ratio as needed
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
