import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import RegisterScreen from './pages/RegisterScreen';
import LoginScreen from './pages/LoginScreen';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './pages/Login';
import Register from './pages/Register';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNav from './components/HomeStackNav';
import ChatScreen from './pages/ChatScreen';

export default function App() {
  useFonts({
    'BerkshireSwash-Regular': require('./assets/fonts/BerkshireSwash-Regular.ttf')
  })

  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      
      <Stack.Navigator
      initialRouteName='HomeStackNav'
      >
        <Stack.Screen
          name='Login' options={{
            headerShown: false
          }}

        >
          {(props)=><LoginScreen {...props}/>}
        </Stack.Screen>

        <Stack.Screen
          name='Register' options={{
            headerShown: false
          }}

        >
          {(props)=><RegisterScreen {...props}/>}
        </Stack.Screen>

        <Stack.Screen
          name='HomeStackNav' options={{
            headerShown: false
          }}

        >
          {(props)=><HomeStackNav {...props}/>}
        </Stack.Screen>

        <Stack.Screen
          name='ChatRoom' options={{
            headerShown: false
          }}

        >
          {(props)=><ChatScreen {...props}/>}
        </Stack.Screen>
        </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
