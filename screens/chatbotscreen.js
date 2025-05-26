<Stack.Screen name="Chatbot" component={ChatbotScreen} />
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

//chatbot screen component
// This is a simple chatbot screen that allows users to send messages and receive automated replies.
const ChatbotScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi there! How can I assist you today?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = { id: Date.now().toString(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    const reply = generateBotReply(inputText);
    const botMessage = { id: (Date.now() + 1).toString(), text: reply, sender: 'bot' };

    setTimeout(() => setMessages(prev => [...prev, botMessage]), 500);

    setInputText('');
  };

  const generateBotReply = (text) => {
    const msg = text.toLowerCase();
    if (msg.includes('appointment')) return 'To book an appointment, go to the home screen and tap "Book Appointment".';
    if (msg.includes('training') || msg.includes('event')) return 'Upcoming trainings are listed on the Events screen. You can tap on one to register.';
    if (msg.includes('help')) return 'You can contact support or ask me anything related to using this app.';
    return "I'm still learning. Try asking about appointments, events, or help.";
  };

  const renderItem = ({ item }) => (
    <View style={[styles.message, item.sender === 'user' ? styles.userMsg : styles.botMsg]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatbotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F7',
  },
  chatContainer: {
    padding: 16,
  },
  message: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMsg: {
    alignSelf: 'flex-end',
    backgroundColor: '#1565C0',
  },
  botMsg: {
    alignSelf: 'flex-start',
    backgroundColor: '#2E7D32',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: '#2E7D32',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#FBC02D',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
