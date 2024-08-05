import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WordCard } from './src/components/wordCard';
import { useEffect } from 'react';

export default function App() {
  const url = '123'
  useEffect(() => {
    const response = fetch(url)

  },[])
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
