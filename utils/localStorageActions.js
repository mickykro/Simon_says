import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async(key,value) =>{
    try {
       await AsyncStorage.setItem(value);
    } catch (error) {
        console.log('error saving data: ',error);
    }   
}
export const setArray = async(key,data) =>{
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log('error saving data: ',error);
    }
}
export async function getItem (key){
    try {
        var data = await AsyncStorage.getItem(key);
        return data; 
    } catch (error) {
        console.log('couldnt get value by key: ',error);
    }
}

export async function getArray(key){
    try {
        var data = await AsyncStorage.getItem(key);
        return  JSON.parse(data);
    } catch (error) {
        console.log('error getting object: ',error);
    }
}
export async function clearData(){
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log('error clearing data: ',error);
    }
}