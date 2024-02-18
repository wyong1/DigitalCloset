import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const { height } = Dimensions.get('window');

export default function TabThreeScreen() {
  const [pageOpened, setPageOpened] = useState(false);

  // Function to toggle between views
  const toggleView = () => {
    setPageOpened(!pageOpened);
  };

  if (pageOpened) {
    // New page with two buttons and a back button
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Catgorize with AI")}>
          <Icon2 name="cloud-check-outline" size={height / 5 - 20} color="black" style={styles.icon} />
          <Text style={styles.buttonText}>Categorize with AI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Manual categorize pressed")}>
          <Icon2 name="image-edit-outline" size={height / 5 - 20} color="black" style={styles.icon} />
          <Text style={styles.buttonText}>Categorize manually</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={toggleView}>
          <Icon name="arrow-left" size={30} color="#4B3B38" />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleView}>
          <Icon name="image" size={height / 4 - 20} color="black" style={styles.icon} />
          <Text style={styles.buttonText}>Choose from gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Take a picture with your camera")}>
          <Icon name="camera" size={height / 4 - 20} color="black" style={styles.icon} />
          <Text style={styles.buttonText}>Take a picture with your camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C1B6B4',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: height / 2 - 120,
    marginTop: 20,
    backgroundColor: '#9D7C77',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  backButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8E7C7D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  icon: {
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Poppins',
    marginLeft: 10, // Added space between icon and text for the back button
  },
});
