import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Icon } from 'react-native-elements';

export default function LoginScreen() {
  

  const [activeTab, setActiveTab] = useState('Login');

  useEffect(function () {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  function switchTab() {
    if (activeTab === 'Login') {
      setActiveTab('Register');
    } else {
      setActiveTab('Login');
    }
  }

  function Login() {
    const [showLoginPassword, setShowLoginPassword] = useState(false);

    return (
      <View style={{ marginTop: 10 }}>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4 }}
            name='envelope'
            type='font-awesome'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#f1f2f6'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCapitalize={false}
            autoCompleteType='email'
            returnKeyType='next'
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4 }}
            name='key'
            type='font-awesome-5'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#f1f2f6'
            secureTextEntry={!showLoginPassword}
            textContentType='password'
            returnKeyType='done'
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowLoginPassword(!showLoginPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name='eye'
              type='font-awesome'
              color='#fff'
              size={22}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Passcode?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        
      </View>
    );
  }

  function Register(){
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    return (
      <View style={{ marginTop: 10 }}>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='user'
            type='font-awesome'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Full Name'
            placeholderTextColor='#f1f2f6'
            textContentType='name'
            autoCompleteType='name'
            returnKeyType='next'
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='envelope'
            type='font-awesome'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#f1f2f6'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCapitalize={false}
            autoCompleteType='email'
            returnKeyType='next'
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='phone'
            type='font-awesome'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Phone'
            placeholderTextColor='#f1f2f6'
            keyboardType='phone-pad'
            returnKeyType='next'
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='key'
            type='font-awesome-5'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#f1f2f6'
            secureTextEntry={!showRegisterPassword}
            textContentType='password'
            returnKeyType='done'
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowRegisterPassword(!showRegisterPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name='eye'
              type='font-awesome'
              color='#fff'
              size={22}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign-up</Text>
        </TouchableOpacity>
        <View>
        </View>
      </View>
    );
  }

  return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    
      <View style={styles.container}>
       
      <View style={styles.container1}>
        <Image
          style={styles.logo1}
          source={require("./assets/images/cook_hat.png")} 
        />
      
      
        <View style={styles.switchTabsView}>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Login' ? 4 : 0,
              borderBottomColor: 'red',
              paddingHorizontal: 4,
              marginRight: 100,
              marginLeft: 40
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Register' ? 4 : 0,
              borderBottomColor: 'red',
              paddingHorizontal: 4,
              marginRight: 14
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Sign-up</Text>
          </TouchableOpacity>
        </View>
        </View>

        {activeTab === 'Login' ? <Login /> : <Register />}
      </View>
     
    </TouchableWithoutFeedback>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)"
   //#EDEDED
  },
  welcomeText: {
    alignSelf: 'center',
    fontSize: 40,
    //fontFamily: 'NSLight',
    marginTop: 10,
    color: 'red',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    //paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  logo1: {
    width: 150,
    height: 150,
  },
  switchTabsView: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 40,
    paddingTop: 40,
    backgroundColor: '#fff',
    borderRadius: 50
  },
  switchText: {
    padding: 2,
    fontSize: 20,
    color: '#000000',
    //fontFamily: 'NSExtraBold',
  },
  inputView: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginTop: 35,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'red'
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    //fontFamily: 'NSLight',
    paddingHorizontal: 4,
    color: '#fff',
    //backgroundColor: 'red'
  },
  button: {
    marginHorizontal: 40,
    backgroundColor: '#FA4A0C',
    marginTop: 50,
    paddingVertical: 15,
    width: 314,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {  
    fontSize: 18, 
    color: '#F6F6F9' 
  },
  forgotPasswordText: {
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: 'flex-start',
    color: '#FA4A0C',
    fontSize: 18,
    //fontFamily: 'NSBold',
  }
});