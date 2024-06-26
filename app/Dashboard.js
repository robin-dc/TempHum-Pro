import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { db } from '../config';
import { ref, onValue } from 'firebase/database'
import GradientText from './components/GradientText';

export default function Dashboard({ darkMode, toggleDarkMode }) {
  const [data, setData] = useState({})
  const [tempText, setTempText] = useState("normal")
  const [humText, setHumText] = useState("normal")


  useEffect(()=> {
    const starCountRef = ref(db, 'sensor_data')
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data)
    })

    if(Number(data?.temperature) > 38){
      setTempText("high")
    }
    if(Number(data?.humidity) > 70){
      setHumText("high")
    }
  }, [])


  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#1d1d1f' : '#fff' }]}>

      {darkMode ?
        <GradientText style={styles.title}>TempHum Pro</GradientText> :
        <Text style={[styles.title, { color: '#1d1d1f' }]}>TempHum Pro</Text>
      }
      <Text  style={[styles.p, { color: darkMode ? '#FFF' : '#1d1d1f' }]}>Take care of your day by checking our Temperature and Humidity App</Text>
        <View style={styles.wrapper}>
            <LinearGradient
                colors={['#0FE687', '#1ABBD5']}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.innerContainer}
            >
                <View>
                    <Text style={styles.subtitle}>Temperature</Text>
                    <Text style={styles.temp}>{data?.temperature}°C</Text>
                    <Text style={styles.subtext}>The recorded temperature is within {tempText} range. Have a great day!</Text>
                </View>
                <Image
                    source={require('../assets/sunCloud.png')}
                    style={styles.image}
                />
            </LinearGradient>
            <LinearGradient
                colors={['#0FE687', '#1ABBD5']}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.innerContainer}
            >
                <View>
                <Text style={styles.subtitle}>Humidity</Text>
                    <Text style={styles.temp}>{data?.humidity}%</Text>
                    <Text style={styles.subtext}>The recorded humidity is within {humText} range. Have a great day!</Text>
                </View>
                <Image
                    source={require('../assets/cloudy.png')}
                    style={styles.image}
                />
            </LinearGradient>
        </View>
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
    paddingHorizontal: 20,
    height: '100%'
  },
  wrapper: {
    flexDirection: 'column',
    height: 500,
    width: 330,
  },
  innerContainer: {
    width: '100%',
    padding: 20,
    marginTop: 30,
    borderRadius: 20,
    position: 'relative',
    elevation: 5
  },
  subtitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1d1d1f'
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1d1d1f',
    width: '100%',
  },
  p: {
    fontSize: 15,
    color: '#1d1d1f',
    width: '100%'
  },
  subtext: {
    fontSize: 12,
    width: 160,
  },
  button: {
    backgroundColor: '#0FE687', // Change button background color
    paddingVertical: 10,
    width: '80%',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#1d1d1f'
  },
  image: {
    width: 300, // Adjust width as needed
    height: 300, // Adjust height as needed
    resizeMode: 'contain', // Adjust resizeMode as needed
    position: 'absolute',
    right: -100,
    top:-65,
  },
});
