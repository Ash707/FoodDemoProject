import React from 'react';
import {  StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import ScrollingButtonMenu from 'react-native-scroll-menu';

function TabA() {
  return (
    <View style={styles.container}>
      <Icon name='shopping-cart'color='#000000' style={styles.cart}/>
      <View style={styles.firstview}>
        <Text style={styles.starting}>Delicious food for you</Text>
        
      </View>
      

      {/* Search Bar */}
      <View style={ styles.searchBar}>
            <Input
              leftIcon={
                <Icon name='search' size={22} color='#c1c1c1' />
              }
              style={{
                paddingHorizontal: 20,
                backgroundColor: '#EFEEEE',
                color: '#c1c1c1',
                fontSize: 16,
                borderRadius: 20
              }}
              placeholder='Search'
              placeholderTextColor='#c1c1c1'
            />
           
      </View>

          <ScrollingButtonMenu containerStyle={styles.scrollMenu} 
            items={[
              {
                id: "1",
                name: 'Foods',
              },
              {
                id: "2",
                name: 'Drinks',
              },
              {
                id: "3",
                name: 'Snacks',
              },
              {
                id: "4",
                name: 'Cakes',
              },
              {
                id: "5",
                name: 'Cookies',
              },
            ]}
            onPress={(e) => {
              console.log(e);
              
            }}
            selected={"1"}
          />

      <ScrollView horizontal={true}>
      <View style={styles.ShapeView} >
      <Image
          style={styles.logo1}
          source={require("./assets/images/image1.png")} 
        />
      <Text style={styles.text}>Veg Starters</Text>
      </View>
      
      <View style={styles.ShapeView} >
      <Image
          style={styles.logo1}
          source={require("./assets/images/image2.jpg")} 
        />
      <Text style={styles.text}>Non-Veg</Text>
      </View>

      <View style={styles.ShapeView} >
      <Image
          style={styles.logo1}
          source={require("./assets/images/image3.jpg")} 
        />
      <Text style={styles.text}>Continental</Text>
      </View>

      <View style={styles.ShapeView} >
      <Image
          style={styles.logo1}
          source={require("./assets/images/image4.jpg")} 
        />
      <Text style={styles.text}>Chinese</Text>
      </View>

      <View style={styles.ShapeView} >
      <Image
          style={styles.logo1}
          source={require("./assets/images/image5.jpg")} 
        />
      <Text style={styles.text}>South Indian</Text>
      </View>
      
      </ScrollView>
    
    </View>
  );
  
}

function TabB() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fav Items</Text>
    </View>
  );
}

function TabC() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personal Data</Text>
    </View>
  );
}

function TabD() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Previous orders</Text>
      </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={
        {
          
           activeTintColor: '#FA4A0C',
           //inactiveTintColor: '#EDEDED',
          
           activeBackgroundColor: '#EDEDED',
           inactiveBackgroundColor: '#EDEDED',
        }
      }
    >

      <Tab.Screen
        name='Home'
        component={TabA}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={TabB}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='favorite' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={TabC}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name='History'
        component={TabD}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='history' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  firstview:{
    width: 390,
    height: 120,
    //backgroundColor: 'red'
  },
  starting:{
    width: 180,
    height: 82,
    left: 2,
    top: 25,
    color: 'black',
    //backgroundColor: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  cart:{
    left: 140  ,
    //backgroundColor: 'yellow',
    marginTop:20
    
    
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#EDEDED'
    
  },
  text: {
    fontSize: 22,
    top: 15,
    color: '#000000',
    //paddingLeft: 20,
    //backgroundColor: '#EDEDED',
    textAlign: 'center'
  },
  searchBar: {
    
    width: 300,
    height: 50,
    left: 30,
    top: 15,
    backgroundColor: '#EFEEEE',
    borderRadius: 30
  },
  scrollMenu: {
    marginTop: 40,
    padding: 40,
  //backgroundColor: 'yellow'
    
  },
  ShapeView: {
    width: 180,
    height: 250,
    left: 20,
    margin: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 30
  },
  logo1:{
    borderRadius: 50
  }
});