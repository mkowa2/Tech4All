// Example to Make a Phone Call in React Native App
// https://aboutreact.com/example-to-make-a-call-from-the-react-native-app/

// import React in our code
import React, { useEffect, useState } from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Linking,
} from 'react-native';

// import Call API
import call from 'react-native-phone-call';

const App = () => {
  const [inputValue, setInputValue] = useState('8722094334');
  const [inputSpanish, setInputSpanish] = useState('7086557466');
  const [isEnabled, setIsEnabled] = useState(false);
  const turnOnSpanish = () => setIsEnabled(previousState => !previousState);

  const triggerCall = () => {
    const args = {
      number: isEnabled ? inputValue : inputSpanish,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Tech4All
        </Text>
        <Text style={styles.titleTextsmall}>{isEnabled ? "Click the button that best describes what you need help with:" : "Haga clic en el botón que mejor describa con qué necesita ayuda:"}</Text>
        <View>
                <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle3}
            onPress={turnOnSpanish}>
            <Text style={styles.buttonTextStyle1}>{isEnabled ? "Español" : "English" }</Text>
            <Image
            />
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={triggerCall}>
            <Text style={styles.buttonTextStyle}>{isEnabled ? "Phone" : "Teléfono" }</Text>
            <Image
            />
          </TouchableOpacity>
        </View>

                <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={triggerCall}>
            <Text style={styles.buttonTextStyle}>{isEnabled ? "Computer" : "Computadora" }</Text>
            <Image
            />
          </TouchableOpacity>
        </View>

                <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={triggerCall}>
            <Text style={styles.buttonTextStyle}>{isEnabled ? "Internet" : "Internet" }</Text>
            <Image
            />
          </TouchableOpacity>
        </View>

                <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={triggerCall}>
            <Text style={styles.buttonTextStyle}>{isEnabled ? "Other" : "Otra" }</Text>
            <Image
            />
          </TouchableOpacity>
        </View>

                <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle2}
            onPress={ ()=>{ Linking.openURL('https://forms.gle/oHkYtXpbeVHH9rtZA')}} >
            <Text style={styles.volunteer}> {isEnabled ? "Interested in volunteering?" : "¿Interesado en ser voluntario?"}</Text>
            
            <Image
            />
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ebeb',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 20,
    textAlign: 'center'

  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#8ad24e',
    width: 360,
    height: 110,
    marginHorizontal : 5
  },
  buttonStyle2: {
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#42b3f5',
    width: 360,
    height: 110,
    marginHorizontal : 5
    
  },
  buttonStyle3: {
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#f75452',
    width: 360,
    height: 50,
    marginHorizontal : 5
    
  },
  buttonTextStyle1: {
    color: '#fff',
    height: 100,
    width: 360,
    fontSize: 20,
    textAlign: 'center',
    marginTop : 75,
    fontFamily: 'Rubik'
  },
  buttonTextStyle: {
    color: '#fff',
    height: 100,
    width: 360,
    fontSize: 40,
    textAlign: 'center',
    marginTop : 40,
    fontFamily: 'Rubik'
  },
    volunteer: {
    color: '#fff',
    height: 100,
    width: 360,
    fontSize: 35,
    textAlign: 'center',
    marginTop : 15
  },
});
