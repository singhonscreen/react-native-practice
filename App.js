
import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView, StatusBar, Platform,T, Button } from 'react-native';


import Card from './App/Card'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     
      <Image style={styles.myImage} source={{uri:"https://picsum.photos/200/300"} }/>
     
      <Text style={styles.text}>Hiii I love Coding My name is Avadhesh</Text>
      <Card />
      <Button color="orange"  title="Click Me" onPress={()=>alert("clicked")} />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Platform.OS==='android' ? StatusBar.currentHeight:0 
  },
  text:{
    color:"white",
    flex:1,
    fontSize:20
  },
  myImage:{
    width:200,
    height:200,
    borderRadius:10,
    flex:1,
    opacity:0.5,
    
  },

});

