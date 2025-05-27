// HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Kiambu-u-Konnect</Text>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BookAppointment')}>
          <FontAwesome5 name="calendar-check" size={32} color="#2e86de" />
          <Text style={styles.label}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Partnerships')}>
          <Ionicons name="handshake-outline" size={32} color="#20bf6b" />
          <Text style={styles.label}>Partnerships</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Events')}>
          <MaterialIcons name="event" size={32} color="#eb3b5a" />
          <Text style={styles.label}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chatbot')}>
          <Entypo name="chat" size={32} color="#8854d0" />
          <Text style={styles.label}>Chatbot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f6f6',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  card: {
    width: '40%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    elevation: 5,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});
// This is the HomeScreen component for the Kiambu-u-Konnect app.
// It provides a grid layout with icons and labels for navigating to different sections of the app.