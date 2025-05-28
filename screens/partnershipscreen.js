import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

// Dummy data (replace with API later)
const mockOpportunities = [
  {
    id: '1',
    title: 'Digital Marketing Training',
    description: 'Join a 3-week intensive training on digital marketing hosted by the County ICT Department.',
    date: 'June 15, 2025',
  },
  {
    id: '2',
    title: 'Youth Innovation Grant',
    description: 'Apply now for a grant supporting youth innovation and entrepreneurship.',
    date: 'Deadline: July 5, 2025',
  },
  {
    id: '3',
    title: 'Free Coding Bootcamp',
    description: 'Get hands-on skills in coding. Open to youths aged 18-35.',
    date: 'Starts: July 1, 2025',
  },
];

export default function PartnershipsScreen() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from backend
  useEffect(() => {
    setTimeout(() => {
      setOpportunities(mockOpportunities); // Replace this with fetch() later
      setLoading(false);
    }, 1000);
  }, []);

  const renderOpportunity = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Opportunities for Youth</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#009688" />
      ) : (
        <FlatList
          data={opportunities}
          renderItem={renderOpportunity}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F9F8',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00695C',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#009688',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
// This code defines a React Native screen for displaying partnership opportunities for youth.
// It includes a mock data array, a state to manage opportunities, and a loading state.