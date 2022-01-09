import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import { Button, Text } from 'react-native-paper';
import { getArray } from '../utils/localStorageActions';

const LeadersBoard = ({ navigation })=>{  
    const [leaders, setLeaders] = useState([]);

    useEffect(()=>{
        getLeadersBoard();
    },[])

    const nav = () =>{
        navigation.navigate('Game');
    }



   const  getLeadersBoard = async() =>{
        let data = await getArray('scores');
        setLeaders(JSON.parse(data).sort((a,b)=> parseInt(b.score)-parseInt(a.score)));
    }

        return (<View style={styles.main}>
          <Text style={styles.title}> Leaders Board</Text>
            <View style={styles.table}>
                <View style={styles.line}></View>
                <FlatList 
                data={leaders}
                renderItem={({item})=>{ 
                   
                    if(item){
                    return (<View>
                    <View style={styles.tableTitle}>
                        <Text style={styles.tableValue}>{item.name}</Text>
                        <Text style={styles.tableValue}>{item.score}</Text>
                        <Text style={styles.tableValue}>{`${new Date(item.timeStamp).getHours()}:${new Date(item.timeStamp).getMinutes()<10 ? 0:'' }${new Date(item.timeStamp).getMinutes()}`}</Text>
                        <Text style={styles.tableValue}>{new Date(item.timeStamp).toLocaleDateString()}</Text>
                    </View>
                    <View style={styles.line}></View>
                    </View>
                );
            }return <View>
                <Text>no scores yet</Text>
            </View>
                
                }}>

                </FlatList>
            </View>
            <Button mode='contained' style={styles.playAgain} onPress={nav}>play again</Button>
            </View>);
    
};

const styles = StyleSheet.create({
   tableTitle: {
       flex:1,
       flexDirection: 'row',
      margin: 10
   },
   table:{
       hight:'80%',
       flex: 0.8,
       marginTop:10
   },
   line: {
        backgroundColor: 'black',
       width:'100%',
       height: 1,
       textAlign: 'center',
   },
   tableValue: {
       textAlign:'left',
       color:'white',
       flex: 0.25,
       fontFamily: 'PressStart2P-Regular', 
       fontSize: 10,
       lineHeight: 30

   },
   playAgain: {
       position:'absolute',
       bottom:10,
       margin: 30
   }, 
   main: {
       backgroundColor: "#120219",
       flex:1
   },
   title: {
       fontFamily: 'CaveatBrush-Regular', 
       textAlign:'center',
       fontSize: 32,
       margin: 20, 
       color: 'blue', 
       
   }
})


export default LeadersBoard;