import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text, AsyncStorage } from 'react-native';
import { Button } from "react-native-paper";
import ColorButton from "./colorButton";
import timeOut from '../utils/timer';
import Sound from "react-native-sound";
import { getItem, setItem, getArray, setArray } from "../utils/localStorageActions";

const styles = StyleSheet.create({
    container: {
        marginTop:40,
        justifyContent: 'center',
        alignItems:'center'
    },
    titleContainer:{
      marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    score: {
        fontSize: 24,
        letterSpacing: 0.25,
        textAlign: 'center',
        color:'white'
    },
    navButton:{
        margin: 20, 
    },
    navContainer:{
        direction: 'rtl',
        width:'100%',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.5)',
        bottom:0,
        position:'absolute'
    },
    navText:{
        color: 'blue',
    }, 
    newGame: {
        marginTop:100
    }
});
const initialState = {
    name: '',
    isOn: false,
    isDisplay: false,
    colors: [],
    score: 0,
    userTurn: false,
    userColors: []
};
const ButtonsContainer = ({navigate}) => {
    const colors = [{ color: 'green' }, { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
    const [isOn, setIsOn] = useState(false);
    const [flash, setFlash] = useState('');
    const [name, setName] = useState('');
    const [game, setGame] = useState({...initialState});
    Sound.setCategory('Playback');

    async function loadRing(){
    
         let sound =  new  Sound('losing.wav',Sound.MAIN_BUNDLE, (err)=>{
            if(err){
                console.log('error loading sound ',err);
                return;
            }
        });

        sound.setVolume(3)
        sound.release();
        setTimeout(()=>{sound.play((success)=>{
        });},100) 
    }

   
    
   useEffect( ()=>{
    getName();
    getState();
    
   },[]);

 


   const getState = async() =>{
       const data = await getArray('state');
       if(data && data !== initialState){
       setGame(data);
       }
   }

   const getName = async() =>{
        const data =await getItem('user_name');
        setName(data);
   }

   const addScore = async() => {
       const newScore = {
           name,
           score: game.score,
           timeStamp:  Date.now()
       }
        let scores = await getArray('scores').catch(e=>console.log(e));
        
        if(scores){
            scores = JSON.parse(scores);
            scores.push(newScore);
            await setArray('scores',JSON.stringify(scores));
        }else {
            scores = [];
            scores.push(newScore);
            await setArray('scores',JSON.stringify(scores));
        }

   }

   const newGame = () =>{
       setGame({...initialState, score:0});
       setIsOn(false);
   }
   

    useEffect(() => {
        if (isOn) {
            setGame({ ...game, isDisplay: true })
        } else {
            setGame(game);
        }
    }, [isOn])

    useEffect(() => {
       
        if (isOn && game.isDisplay ) { 
            let newColor = colors[Math.floor(Math.random() * 4)];
            const copyColors = [...game.colors];
            copyColors.push(newColor.color);
            const gameState = {...game,colors: [...copyColors]};
            
            setGame(gameState);
        }
    }, [isOn, game.isDisplay ])


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
                const userColors = copyColors.reverse();
                const gameState = {...game, isDisplay:false, userTurn: true, userColors};
                setGame(gameState);
            }
        }
    }

    const saveCurrentStateAndNavigate= async(route)=>{
        await setArray('state', game);
        navigate(route);
    }

   async function colorClick(color) {
        
        if (!game.isDisplay && game.userTurn ) {
            const copyColors = [...game.userColors];
            const lastColor = copyColors.pop();
            setFlash(color);
            if (color === lastColor) {
                setGame({...game,userTurn: true});
                if (game.userColors.length <= 1) {
                    setGame({ ...game, userColors: copyColors, isDisplay:true, score: game.colors.length });
                } else {
                    await timeOut(1000);
                    setGame({
                        ...game,
                        isDisplay: false,
                        userTurn: true,
                        userColors: copyColors,
                    });
                }
            }else {
            await timeOut(1000);
            loadRing();
            addScore();
            setGame({ ...initialState, score: game.colors.length });
            await timeOut(2000);
            setIsOn(!isOn);
          }
        }
          await timeOut(1000);
          setFlash('');
    }

    return (<View style={{height:'100%',}}>
        <View style={styles.titleContainer}>
            <Text style={{color:'white'}}>{name}</Text>
            <Text style={{color:'white'}}>{`level: ${game.colors.length>0?  game.colors.length : 1}`}</Text>
            {isOn && <Text style={{color:'white'}}>{ game.isDisplay ? 'displaying..': 'your turn'}</Text>}
        </View>
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
        {isOn && <Button mode="contained" style={styles.newGame} onPress={()=>newGame()}><Text style={styles.score}> new game</Text></Button>}
        <View style={styles.navContainer}>
        <Button style={styles.navButton} onPress={()=>saveCurrentStateAndNavigate('Home')}><Text style={styles.navText}>back</Text></Button>
        <View style={{height:40, width:1, backgroundColor:'blue', margin:20}}></View>
        <Button  style={styles.navButton} onPress={()=>saveCurrentStateAndNavigate('LeadersBoard')}><Text style={styles.navText}>to Leaders Board</Text></Button>
        </View>
    </View>
    );
}

export default ButtonsContainer;