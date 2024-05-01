import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './app/Dashboard'; // Import your DashboardScreen component
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="v1.0.0" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handlePress = () => {
    // Navigate to Dashboard screen when button is pressed
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TempHum Pro</Text>
      <Image
        source={require('./assets/sunCloud.png')}
        style={styles.image}
      />
      <Text style={styles.p}>Take care of your day by checking our Temperature and Humidity App</Text>
      <TouchableOpacity onPress={handlePress}>
          <LinearGradient
            colors={['#0FE687', '#1ABBD5']} // Gradient colors for the button
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Start Now</Text>
          </LinearGradient>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 11
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1d1d1f'
  },
  p: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 40,
    color: '#1d1d1f'
  },
  buttonGradient: {
    paddingVertical: 10,
    width: 250,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#1d1d1f'
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  },
});
