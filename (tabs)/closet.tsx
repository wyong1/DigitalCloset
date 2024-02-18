import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

// Sample data for each category
const categoryData: { [key: string]: { id: string; uri: string; }[] } = {
  Hat: [
    { id: '1', uri: 'path_to_hat_image_1' },
    { id: '2', uri: 'path_to_hat_image_2' },
    { id: '3', uri: 'path_to_hat_image_3' },
  ],
  Jacket: [
    { id: '1', uri: 'assets/clothPic/jacket1.png' },
    { id: '2', uri: 'assets/clothPic/jacket2.png' },
    { id: '3', uri: 'assets/clothPic/jacket3.png' },
    { id: '4', uri: 'assets/clothPic/jacket1.png' },
    { id: '5', uri: 'assets/clothPic/jacket2.png' },
    { id: '6', uri: 'assets/clothPic/jacket3.png' },
  ],
  Top: [
    { id: '1', uri: 'assets/clothPic/shirt1.png' },
    { id: '2', uri: 'assets/clothPic/shirt2.png' },
    { id: '3', uri: 'assets/clothPic/shirt3.png' },
  ],
  Bottom: [
    { id: '1', uri: 'assets/clothPic/pants1.png' },
    { id: '2', uri: 'assets/clothPic/pants2.png' },
    { id: '3', uri: 'assets/clothPic/pants3.png' },
  ],
  Shoes: [
    { id: '1', uri: 'assets/clothPic/shoes1.png' },
    { id: '2', uri: 'assets/clothPic/shoes2.png' },
    { id: '3', uri: 'assets/clothPic/shoes3.png' },
  ],
  Bag: [
    { id: '1', uri: 'assets/clothPic/bag1.png' },
    { id: '2', uri: 'assets/clothPic/bag2.png' },
    { id: '3', uri: 'assets/clothPic/bag3.png' },
  ],
  Other: [
    { id: '1', uri: 'path_to_other_image_1' },
    { id: '2', uri: 'path_to_other_image_2' },
    { id: '3', uri: 'path_to_other_image_3' },
  ],
};

export default function ClosetPage() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categoryData>('Jacket');

  // Function to handle category selection
  const handleCategorySelection = (category: keyof typeof categoryData) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {Object.keys(categoryData).map((category) => (
          <TouchableOpacity key={category} style={[styles.sidebarButton, selectedCategory === category && styles.selectedCategoryButton]} onPress={() => handleCategorySelection(category as keyof typeof categoryData)}>
            <Text style={[styles.sidebarButtonText, selectedCategory === category && styles.selectedCategoryText]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView 
        style={styles.mainContent}
      >
      <FlatList

        data={categoryData[selectedCategory]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={styles.image} resizeMode="contain" />
        )}
      />

        {/* <FlatList
          data={categoryData[selectedCategory]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={styles.image} />
          )}
        /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#C1B6B4',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#9D7C77',
    paddingTop: 40,
    paddingRight: 0,
  },
  sidebarButton: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#5D5D5D',
  },
  sidebarButtonText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins',
  },
  selectedCategoryButton: {
    backgroundColor: '#7C5D5E',
    // marginLeft: -10, // Adjust the extension to the right
  },
  selectedCategoryText: {
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    marginLeft: 0,
    paddingHorizontal: 0,
  },
  image: {
    // aspectRatio: 0.2,
    // resizeMode: 'contain',
    flex: 1,
    width: width* 0.7,
    height: height* 0.7,
    marginVertical: -150,
    alignSelf: 'stretch',
    
  },
});


// // import { StyleSheet } from 'react-native';

// // import EditScreenInfo from '@/components/EditScreenInfo';
// // import { Text, View } from '@/components/Themed';

// // export default function TabThreeScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>My Closet</Text>
// //       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
// //       {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// //   separator: {
// //     marginVertical: 30,
// //     height: 1,
// //     width: '80%',
// //   },
// // });


