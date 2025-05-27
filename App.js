import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from './screens/homescreenomeScreen';
import Logscreen from './screens/Logscreen';
import bookingappointmentsscreen from './screens/bookingappointmensscreen';
import partnershipsScreen from './screens/partnershipsScreen';
import EventScreen from './screens/EventScreen';
import chatbotScreen from './screens/chatbotscreenhatbotScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Logs" component={LogScreen} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="bookAppointments" component={BookingScreen} />
        <Stack.Screen name="partnerships" component={PartnershipsScreen} />
        <Stack.Screen name="Events" component={EventScreen} />
        <Stack.Screen name="chatbot" component={ChatbotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}