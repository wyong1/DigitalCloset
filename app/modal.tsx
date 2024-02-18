import { StatusBar } from 'expo-status-bar';
import { Platform, TouchableOpacity, StyleSheet, Linking } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Donation Center Resources</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <TouchableOpacity onPress={() => openLink('https://www.goodwill.org')}>
          <Text style={styles.member}>Goodwill</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.salvationarmyusa.org')}>
          <Text style={styles.member}>Salvation Army</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.platoscloset.com')}>
          <Text style={styles.member}>Plato's Closet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>The Team</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.member}>Winnie Yong</Text>
        <Text style={styles.member}>Anita Hong</Text>
        <Text style={styles.member}>Shijun You</Text>
        <Text style={styles.member}>Wilson Yang</Text>
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  member: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
