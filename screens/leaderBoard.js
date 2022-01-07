import React, { Component } from 'react';
import { View,Text} from 'react-native';
import { Button } from 'react-native-paper';
import { connect, useSelector } from 'react-redux';

const LeadersBoard = ({ navigation })=>{  
    const { score } = useSelector(state=>state);
    const nav = () =>{
        navigation.navigate('Game');
    }

        return (<View>
            <Text>LeadersBoard</Text>
            <Button onPress={nav}>{score}</Button>
            </View>);
    
};

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        leadersBoard: state.score
    }
}
export default connect(mapStateToProps)(LeadersBoard);