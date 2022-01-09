import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Modal} from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EnterNameModal from '../components/enterNameModal';


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
    const [modal, setModal] = useState(false);
    const [username, setUsername] = useState('');
   
    const start = () =>{
        navigation.navigate('Game');
        setModal(false);
    }

    const enterName = () =>{
        setModal(true);
    }
    


    const nav = async (target) => {
        try{
           await AsyncStorage.setItem('first_target',target);
        }catch(e){
            console.log('saving error ',e);
        }
        console.log('navigating to ',target);
        navigation.navigate(target);
    }

    return (<View style={{ flex: 1, height: '100%', backgroundColor: '#120219' }}>
        <ImageBackground source={require('../assets/homeback.png')} style={{ flex: 1 }}>
           
            <Text style={styles.title}>Simon-Says</Text>
             <View style={styles.menu}>
            <Button  onPress={()=>enterName()} ><Text style={styles.menuButton}>Start</Text></Button>
            <Button   onPress={()=>nav('LeadersBoard')}><Text style={styles.menuButton}>leaderBoard</Text></Button>
            </View>
            {modal && <EnterNameModal visible={modal} setModal={setModal} navigate={start}/>}
        </ImageBackground>
    </View>);

}