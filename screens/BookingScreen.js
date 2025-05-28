import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookingScreen = () => {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [department, setDepartment] = useState('Youth Services');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleBooking = () => {
    if (!name || !reason) {
      Alert.alert('Missing Info', 'Please fill in all the fields.');
      return;
    }

    Alert.alert(
      'Booking Confirmed',
      `Thank you ${name}, your appointment with ${department} is set for ${date.toLocaleString()}`
    );

    // You can add backend/API call here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Full Name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Select Department:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={department}
          onValueChange={(itemValue) => setDepartment(itemValue)}
        >
          <Picker.Item label="Youth Services" value="Youth Services" />
          <Picker.Item label="ICT Department" value="ICT Department" />
          <Picker.Item label="Health Services" value="Health Services" />
          <Picker.Item label="Business/Finance Support" value="Business/Finance Support" />
        </Picker>
      </View>

      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.dateButton}
      >
        <Text style={styles.dateButtonText}>Pick Date</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity
        onPress={() => setShowTimePicker(true)}
        style={styles.dateButton}
      >
        <Text style={styles.dateButtonText}>Pick Time</Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (selectedTime) {
              const updatedDate = new Date(date);
              updatedDate.setHours(selectedTime.getHours());
              updatedDate.setMinutes(selectedTime.getMinutes());
              setDate(updatedDate);
            }
          }}
        />
      )}

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Reason for Appointment"
        value={reason}
        onChangeText={setReason}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Submit Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E5F4F1',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    color: '#00695C',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  dateButton: {
    backgroundColor: '#00796B',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  dateButtonText: {
    color: '#fff',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#009688',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
// This code defines a BookingScreen component for booking appointments in a React Native application.
// It includes fields for the user's name, department selection, date and time pickers, and a reason for the appointment.