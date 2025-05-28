import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeSScreen';
import LogScreen from './screens/LogSScreen';
import BookingScreen from './screens/BookingSScreen';
import PartnershipScreen from './screens/PartnershipSScreen';
import ChatbotScreen from './screens/ChatbotSScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logs">
        <Stack.Screen name="Logs" component={LogScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Partnership" component={PartnershipScreen} />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
