import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';


const styles = StyleSheet.create({
    back: {
        flex: 1,
        height: '100%',
        backgroundColor: '#120219',
    },
    menu: {
        flex:1,
        justifyContent:'center',
        flexDirection: 'column',
        alignItems:'center'
    },
    menuButton:{
        fontSize: 24,
        color:'yellow',
        
        fontFamily: 'PermanentMarker-Regular',
        backgroundColor:'rgba(192,192,192,0.2)'
    },
    title:{
        fontFamily: 'PermanentMarker-Regular',
        color:'yellow',
        fontSize:48,
        textAlign:'center',
        textShadowColor: 'white',
        textShadowOffset: {width: -1, height: 1},
         textShadowRadius: 10
    }
});




export default HomeScreen = ({ navigation }) => {
   

    const nav = (target) => {
        console.log('supposed to go to ',target);
        navigation.navigate(target);
    }

    return (<View style={{ flex: 1, height: '100%', backgroundColor: '#120219' }}>
        <ImageBackground source={require('../assets/homeback.png')} style={{ flex: 1 }}>
           
            <Text style={styles.title}>Simon-Says</Text>
             <View style={styles.menu}>
            <Button  onPress={()=>nav('Game')} ><Text style={styles.menuButton}>Start</Text></Button>
            <Button   onPress={()=>nav('LeadersBoard')}><Text style={styles.menuButton}>leaderBoard</Text></Button>
            </View>
        </ImageBackground>
    </View>);

}