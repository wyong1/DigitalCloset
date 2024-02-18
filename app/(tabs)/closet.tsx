import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ClosetPage = () => {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        {/* Side menu */}
        <View style={styles.sideMenu}>
          <Text style={styles.menuItem}>Hat</Text>
          <Text style={styles.menuItem}>Jacket</Text>
          <Text style={styles.menuItemActive}>Top</Text>
          <Text style={styles.menuItem}>Bottom</Text>
          <Text style={styles.menuItem}>Shoes</Text>
          <Text style={styles.menuItem}>Bag</Text>
          <Text style={styles.menuItem}>Other</Text>
        </View>

        {/* Main content area */}
        <View style={styles.items}>
          {/* This is where you would map through your items data and render them */}
          {/* <Image source={{ uri: 'path_to_white_top_image' }} style={styles.itemImage} />
          <Image source={{ uri: 'path_to_black_top_image' }} style={styles.itemImage} />
          <Image source={{ uri: 'path_to_another_top_image' }} style={styles.itemImage} /> */}
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  navbar: {
    height: 60,
    backgroundColor: '#000000',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  navTitle: {
    color: '#FFF',
    fontSize: 18,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  sideMenu: {
    width: 100,
    backgroundColor: '#9D7C77',
    borderColor: '#FFFFFF',
    paddingVertical: 20,
  },
  menuItem: {
    color: '#CCC',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuItemActive: {
    color: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#666',
  },
  items: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  itemImage: {
    width: 150,
    height: 150,
    margin: 10,
  },
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ClosetPage;



// import { StyleSheet } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';

// export default function TabThreeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My Closet</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });


