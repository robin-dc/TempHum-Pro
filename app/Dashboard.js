import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Dashboard({ darkMode, toggleDarkMode }) {


  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#1d1d1f' : '#fff' }]}>

      <Text style={[styles.title, { color: darkMode ? '#FFF' : '#1d1d1f' }]}>TempHum Pro</Text>
      <Text  style={[styles.p, { color: darkMode ? '#FFF' : '#1d1d1f' }]}>Take care of your day by checking our Temperature and Humidity App</Text>
        <View style={styles.wrapper}>
            <LinearGradient
                colors={['#0FE687', '#1ABBD5']} // Gradient colors for the button
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.innerContainer}
            >
                <View>
                    <Text style={styles.subtitle}>Temperature</Text>
                    <Text style={styles.temp}>36C</Text>
                    <Text style={styles.subtext}>The recorded temperature is within normal range. Have a great day!</Text>
                </View>
                <Image
                    source={require('../assets/sunCloud.png')}
                    style={styles.image}
                />
            </LinearGradient>
            <LinearGradient
                colors={['#0FE687', '#1ABBD5']} // Gradient colors for the button
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.innerContainer}
            >
                <View>
                <Text style={styles.subtitle}>Humidity</Text>
                    <Text style={styles.temp}>57%</Text>
                    <Text style={styles.subtext}>The recorded humidity is within normal range. Have a great day!</Text>
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
