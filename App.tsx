import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WordCard } from './src/components/wordCard';
import { useEffect } from 'react';
import {useFonts} from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  })

  if(!fontsLoaded){
    return undefined
  }
  return (
    <View style={styles.container}>
      <WordCard level={'A1 Level'} word={'mother'} transcription={'[`matsh]'} translatedWord={'мама'}></WordCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(20, 22, 27, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
