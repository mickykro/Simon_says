import React from 'react';
import { View, SafeAreaView } from 'react-native';
import ButtonsContainer from '../components/buttonsContainer';

export default GameScreen = () =>{
    return (
    <SafeAreaView >
        <View style={{ backgroundColor: '#120219'}}>
            <ButtonsContainer/>
        </View>
    </SafeAreaView>
    )
}
