import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { color } from "react-native-elements/dist/helpers";

const FirstScreen = ({navigation})=>{
    
    return (
        <View style={styles.firstview}>
            
                <Text style={styles.txt}>Food for everyone</Text>
                <Image
                    style={styles.image2}
                    source={require("./assets/images/beard.png")}
                />
                <Image
                    style={styles.image1}
                    source={require("./assets/images/front.png")}
                />
             
            <View style={styles.butview}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Login')}><Text style={{ color: '#FF460A', fontWeight: 'bold' }}>Login</Text></TouchableOpacity>

                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Dash')}><Text style={{ color: '#FF460A', fontWeight: 'bold' }}>Continue Without Login</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    firstview:{
        flex:1,
        backgroundColor: '#FF4B3A',
        //backgroundColor: 'red'
    },
    txt:{
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 30,
        width: 150,
        left: 70,
        top:80
        //backgroundColor: 'yellow'
    },
    image1:{
        //top:20,
        bottom:180,
       // backgroundColor: 'yellow'
    },
    image2:{
        top:180,
        left:180,
        //backgroundColor: 'yellow'
    },
    butview:{
        bottom:780
    },

    button1: {
        alignItems: "center",
        margin: 150,
        top: 440,
        right: 100,
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 30
      },
      button2: {
          alignItems: "center",
          //height: 50,
          margin: 100,
          top: 150,
          left: 80,
          backgroundColor: "#FFFFFF",
          padding: 10,
          borderRadius: 30
      }
});

export default FirstScreen;