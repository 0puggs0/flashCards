import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '../screens/initialScreen';
import { NavigationContainer } from '@react-navigation/native';
import { WordCard } from '../screens/wordCard';
import CategoryScreen from '../screens/categoryScreen';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="initialScreen" component={InitialScreen}  options={{ 
            gestureEnabled: false,
          }}  />
      <Stack.Screen name="Category" component={CategoryScreen} options={{ 
            gestureEnabled: false,
          }} />
      <Stack.Screen name="WordCard" component={WordCard} options={{ 
            gestureEnabled: false,
          }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}