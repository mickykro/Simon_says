import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView, Text } from 'react-native';
import { Button } from "react-native-paper";
import ColorButton from "./colorButton";
import timeOut from '../utils/timer';
import { useSelector, useDispatch } from "react-redux";
// import {startGame,
//     addColor,
//      displayColors,
//       playerGuessedRight,   
//        playerGuessedRightLastColor, 
//        playerGuessedRightStillPlaying,
//        playerGuessedWrong,
//        saveState
//    } from '../actions';
//    import {PlayReducer} from '../reducers';
//    import { connect } from "react-redux";

const styles = StyleSheet.create({
    container: {
        marginTop:40,
        justifyContent: 'center',
        alignItems:'center'
    },
    score: {
        fontSize: 24,
        letterSpacing: 0.25,
        textAlign: 'center',
        color:'white'
    }
});

const ButtonsContainer = () => {
    const colors = [{ color: 'green' }, { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
    const [isOn, setIsOn] = useState(false);
    const [flash, setFlash] = useState('');
    
    const initialState = {
        name: '',
        isOn: false,
        isDisplay: false,
        colors: [],
        score: 0,
        userTurn: false,
        userColors: []
    };
    const [game, setGame] = useState(initialState);
    
   


    useEffect(() => {
        if (isOn) {
            console.log('start game');
            
           
            setGame({ ...game, isDisplay: true })
        } else {
            setGame(game);
        }
    }, [isOn])

    useEffect(() => {
       
        if (isOn && game.isDisplay ) { 
            console.log('game supposed to add colors:\n',game);
            let newColor = colors[Math.floor(Math.random() * 4)];
            const copyColors = [...game.colors];
            copyColors.push(newColor.color);
            const gameState = {...game,colors: [...copyColors]};
            

            setGame(gameState);
        }
    }, [isOn, game.isDisplay])

    useEffect(() => {
        if (isOn && game.isDisplay && game['colors'].length) {
            displayColors();
        }
    }, [isOn, game.isDisplay, game.colors.length])

    async function displayColors() {
        await timeOut(1500);
        for (let i = 0; i < game.colors.length; i++) {
            setFlash(game.colors[i]);
            await timeOut(1000);
            setFlash('');
            await timeOut(1000);
            if (i === game.colors.length - 1) {
                const copyColors = [...game.colors];
                console.log('flashed all colors now its users turn :',copyColors);
                const userColors = copyColors.reverse();
                const gameState = {...game, isDisplay:false, userTurn: true, userColors};
                console.log('update should look like this: \n',gameState);
                setGame(gameState);
                console.log('updated user colors :\n',game);
            }
        }
    }

   async function colorClick(color) {
        
        if (!game.isDisplay && game.userTurn ) {
            const copyColors = [...game.userColors];
            const lastColor = copyColors.pop();
            setFlash(color);
            if (color === lastColor) {
                setGame({...game,userTurn: true});
                console.log('user guesses: ',game.colors.length);
                if (game.userColors.length <= 1) {
                    console.log('user is guessing last color: ',game);
                    setGame({ ...game, userColors: copyColors, isDisplay:true, score: game.colors.length });
                } else {
                    await timeOut(1000);
                    console.log('user still has more guesses');
                    setGame({
                        ...game,
                        isDisplay: false,
                        userTurn: true,
                        userColors: copyColors,
                    });
                }
            }else {
            await timeOut(1000);
            dispatch(saveState(game));
            setGame({ ...initialState, score: game.colors.length });
            await timeOut(2000);
            setIsOn(!isOn);
          }
        }
          await timeOut(1000);
          setFlash('');
    }

    return (<View>
        <View>

            <FlatList
                contentContainerStyle={styles.container}
                data={colors}
                renderItem={({ item }) => (<ColorButton onClick={()=>colorClick(item.color)} buttonColor={item.color} flash={item.color === flash} />)}
                numColumns={2}
            />
        </View>

        <View style={styles.container}>
        </View>
        {!isOn && <Button onPress={() => { setIsOn(true) }}> start</Button>}
        {isOn && <Text style={styles.score}> {game.score}</Text>}
    </View>
    );
}
const mapStateToProps = (state)=>{
    console.log(state);
    return {
        leadersBoard: state.PlayReducer.score
    }
}
export default ButtonsContainer;