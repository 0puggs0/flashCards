import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import {useFonts} from 'expo-font'
import InitialScreen from './src/screens/initialScreen';
import { MyStack } from './src/navigation/mainStack';
import { Provider } from 'react-redux';
import { setupStore } from './src/store/store';


const store = setupStore();
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
    <Provider store={store}>
    <View style={styles.container}>
      {/* <WordCard level={'A1 Level'} word={'mother'} transcription={'[`matsh]'} translatedWord={'мама'}></WordCard> */}
      {/* <InitialScreen></InitialScreen> */}
      <MyStack></MyStack>
    </View>
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(20, 22, 27, 1)',
    
  },
});
