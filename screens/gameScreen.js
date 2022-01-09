import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import ButtonsContainer from '../components/buttonsContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default GameScreen = ({navigation}) =>{

    const navigate = (route)=>{
        navigation.navigate(route);
    }
  

   
    return (
    <SafeAreaView >
        <View style={{ backgroundColor: '#120219'}}>
            <ButtonsContainer navigate={navigate}/>
           
        </View>
    </SafeAreaView>
    );
}

