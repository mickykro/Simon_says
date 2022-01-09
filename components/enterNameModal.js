import React, {useEffect, useState} from "react";
import { StyleSheet,  View, Text} from 'react-native';
import { TextInput,Button, Dialog, Paragraph} from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItem } from "../utils/localStorageActions";
const styles = StyleSheet.create({
    dialog: {
        borderRadius: 25
    }, 
    continue:{
        borderRadius: 25
    },
    or: {
        textAlign: "center",
        margin:5
    }
})
export default EnterNameModal = ({visible=false, setModal, navigate}) =>{
    const [isVisible, setIsVisible] = useState(false);
    const [current, setCurrent] = useState('');
    const [name, setName] = useState('');

    useEffect(()=>{
        getConnectedName();
    },[])

    useEffect(()=>{
        setIsVisible(visible);
    },[visible]);

    async function getConnectedName(){
        const data =await getItem('user_name');
        setCurrent(data);
    }

    const onCloseEvent = () =>{
        setIsVisible(!isVisible);
    }

  const onSubmitName = async() =>{
        try {
            if(name !== '' )
            await AsyncStorage.setItem('user_name', name).then(()=>navigate());
        } catch (e) {
            console.log('saving error ',e);
        }
    }

    return ( <Dialog style={styles.dialog} visible={isVisible} onDismiss={()=>{setIsVisible(false)}}>
        
        <Dialog.Content>
          <View>
              {current !== '' && <Button style={styles.continue} mode='contained' onPress={()=>navigate()}>{`continue as ${current}`}</Button>}
              <Text style={styles.or}>or</Text>
             <TextInput
            onChangeText={(value)=>{setName(value)}}
            value={name}
            label='enter name'
            placeholder='please enter a user name'
            />
            <Button onPress={()=>onSubmitName()}> sign in</Button>
        </View>
        </Dialog.Content>
        <Dialog.Actions>
            <Button onPress={()=>{setModal(false)}}>cancel</Button>
        </Dialog.Actions>

    </Dialog>
   
    );
}