import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Kiambu-U-Konnect</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Details Page</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CF0F47',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 120,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

