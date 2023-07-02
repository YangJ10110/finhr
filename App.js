import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import logo from '../Finhr_User_Login_2/assets/finhr(edited).png';
import photo from '../Finhr_User_Login_2/assets/google_login.png';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{title: ''}} />
        <Stack.Screen name="Register" component={Register} options={{title: ''}}/>
        <Stack.Screen name="Interests" component={Interests} options={{title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headercontainer}>
        <Image source={logo} alt='Logo' style={styles.logo} />
      </View>
      <View style={styles.bodycontainer}>
        <View style={styles.logincontainer}>
          <TextInput style={styles.emailinputcontainer} placeholder='Email' />
          <TextInput style={styles.pwinputcontainer} placeholder='Password' secureTextEntry={true} />
          <View style={styles.buttoncontainer}>
            <Button title='Login' onPress={() => navigation.navigate('Interests')} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerredirect}>No Account Yet?</Text>
          </TouchableOpacity>
          <Text style={styles.textstyle}>Or</Text>
        </View>
        <View style={styles.googlecontainer}>
          <Image source={photo} alt='Logo' style={styles.googleLogin} />
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function Register({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headercontainer}>
        <Image source={logo} alt='Logo' style={styles.logo} />
      </View>
      <View style={styles.bodycontainer}>
        <View style={styles.logincontainer}>
          <TextInput style={styles.fnameinputcontainer} placeholder='First Name' />
          <TextInput style={styles.lnameinputcontainer} placeholder='Last Name' />
          <TextInput style={styles.newemailinputcontainer} placeholder='Email' />
          <TextInput style={styles.newpwinputcontainer} placeholder='Password' secureTextEntry={true} />
          <View style={styles.buttoncontainer}>
            <Button title='Register' onPress={() => navigation.navigate('Login')} />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function Interests({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headercontainer}>
        <Image source={logo} alt='Logo' style={styles.logo} />
      </View>
      <View style={styles.bodycontainer}>
        <View style={styles.logincontainer}>
          <TextInput style={styles.emailinputcontainer} placeholder='Interests...' />
          <View style={styles.buttoncontainer}>
            <Button title='Done' onPress={() => {}} />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headercontainer: {
    height: 60,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 53,
  },
  textstyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bodycontainer: {
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  emailinputcontainer: {
    backgroundColor: '#babebd',
    padding: 10,
    borderRadius: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  pwinputcontainer: {
    backgroundColor: '#babebd',
    padding: 10,
    borderRadius: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  buttoncontainer: {
    padding: 10,
    borderRadius: 10,
  },
  registerredirect: {
    paddingTop: 1,
    marginLeft: 10,
    color: 'grey',
  },
  fnameinputcontainer: {
    backgroundColor: '#babebd',
    padding: 10,
    borderRadius: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  lnameinputcontainer: {
    backgroundColor: '#babebd',
    padding: 10,
    borderRadius: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  newemailinputcontainer: {
    backgroundColor: '#babebd',
    padding: 10,
    borderRadius: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  newpwinputcontainer: {
    backgroundColor: '#babebd',
    padding: 10,
    borderRadius: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  googlecontainer: {
    flex: 1,
    height: 90,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLogin: {
    width: 300,
    height: 50,
  },
});
