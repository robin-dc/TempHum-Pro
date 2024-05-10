import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './app/Dashboard';
import { LinearGradient } from 'expo-linear-gradient';
import GradientText from './app/components/GradientText';

// import { db } from './config';
// import { ref, set } from 'firebase/database'

const Stack = createStackNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: !darkMode ? '#FFF' : '#1d1d1f'}, headerTintColor:  darkMode ? '#FFF' : '#1d1d1f'}}>
        <Stack.Screen name="v1.0.0">
          {(props) => <HomeScreen {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        </Stack.Screen>
        <Stack.Screen name="Dashboard">
          {(props) => <DashboardScreen {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        </Stack.Screen>
      </Stack.Navigator>
      <TouchableOpacity onPress={toggleDarkMode} style={styles.darkModeButton}>
        <View style={[styles.circleWrapper, { justifyContent: darkMode ? 'flex-end' : 'flex-start', backgroundColor: darkMode ? 'gray' : 'gainsboro'}]}>
          <View style={[styles.circle, { backgroundColor: !darkMode ? 'gray' : 'gainsboro'} ]}></View>
        </View>
      </TouchableOpacity>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation, darkMode, toggleDarkMode }) {
  // const [text, setText] = useState(1)

  const handlePress = () => {
    // set(ref(db, 'sensor_data'), { // TRY LANG TO MAGSEND MOCK DATA SA REALTIME
    //   humidity: 30,
    //   temperature: 32.3
    // })
    navigation.navigate('Dashboard');
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#1d1d1f' : '#fff' }]}>
      {darkMode ? <GradientText style={[styles.title, {textAlign: 'center'}]}>TempHum Pro</GradientText> :
      <Text style={[styles.title, { color: '#1d1d1f' }]}>TempHum Pro</Text>}
      <Image
        source={require('./assets/sunCloud.png')}
        style={styles.image}
      />

      <Text style={[styles.p, { color: darkMode ? '#FFF' : '#1d1d1f' }]}>Take care of youdjasjkdakdr day by checking our Temperature and Humidity App</Text>
      <TouchableOpacity onPress={handlePress}>
        <LinearGradient
          colors={['#0FE687', '#1ABBD5']}
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }}
          style={styles.buttonGradient}
        >
          <Text style={[styles.buttonText, { color: darkMode ? '#FFF' : '#1d1d1f' }]}>Start Now</Text>
        </LinearGradient>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 11
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  p: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 40,
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
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  },
  darkModeButton: {
    position: 'absolute',
    top: 55,
    right: 20,
  },
  circleWrapper: {
    height: 25,
    padding: 3,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 50,
  }
});
