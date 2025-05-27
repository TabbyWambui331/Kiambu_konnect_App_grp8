import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }
    // Dummy login, just navigate to Home
    navigation.navigate('Home');
  };

  const handleGuest = () => {
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    Alert.alert('Reset Password', 'A password reset link will be sent to your email.');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} // Optional app logo
        style={styles.logo}
      />

      <Text style={styles.title}>Kiambu Youth Konnect</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.guestButton} onPress={handleGuest}>
        <Text style={styles.guestText}>Continue as Guest</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Empowering Youth Through Access & Partnerships</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F4F1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 25,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#00695C',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#00796B',
    fontSize: 13,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#009688',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  guestButton: {
    borderWidth: 1,
    borderColor: '#009688',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  guestText: {
    color: '#009688',
    fontSize: 15,
  },
  footer: {
    marginTop: 30,
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});
// This is the Welcome Screen for the Kiambu Youth Konnect app.
// It includes a logo, title, input fields for username and password, a forgot password link,