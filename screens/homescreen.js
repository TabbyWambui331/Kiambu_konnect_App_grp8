import HomeScreen from './screens/HomeScreen';
import LogScreen from './screens/LogScreen';


<Stack.Navigator initialRouteName="Welcome">
  <Stack.Screen name="Welcome" component={LogScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator>
