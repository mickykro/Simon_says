import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, View, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';




const ColorButton = ({ buttonColor, onClick, flash, userTurn }) => {
    const [ringing, setRinging] = useState(false);

    useEffect(() => {
        if (flash) {
            ring();
        }
    }, [flash])

    const ring = () => {
        setRinging(true);
        setTimeout(() => {
            setRinging(false);
        }, 1000);

    }
 
    const buttonStyle = {
        'green':styles.greenButton,
        'yellow':styles.yellowButton,
        'blue':styles.blueButton,
        'red':styles.redButton,

    }

    function wave(color) {
        if (color === 'yellow') return 'rgba(255,255,20,0.7)';
        return `rgba(${color === 'red' ? 220 : 0},${color === 'green' ? 220 : 0},${color === 'blue' ? 220 : 0},0.7)`;
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => {
            //  ring();
            onClick();
        }} disabled={userTurn} style={[buttonStyle[buttonColor],
        ringing ? { backgroundColor: `${wave(buttonColor)}` } : {}]} >
            <View>
                <Text style={styles.text}></Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    greenButton: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 54,
        borderTopLeftRadius: 40,
        elevation: 3,
        backgroundColor: 'green',
        marginBottom: 5,
        marginRight: 5,
       

    },
    redButton: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 54,
        borderTopRightRadius: 40,
        elevation: 3,
        backgroundColor: 'red',
        marginLeft: 5,
        marginBottom: 5

    },
    yellowButton: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 54,
        borderBottomRightRadius: 40,
        elevation: 3,
        backgroundColor: 'yellow',
        marginTop: 5,
        marginLeft: 5


    },
    blueButton: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 54,
        borderBottomLeftRadius: 40,
        elevation: 3,
        backgroundColor: 'blue',
        marginRight: 5,
        marginTop: 5
    },
    text: {
        fontSize: 16,
        lineHeight: 32,
        letterSpacing: 0.25,
        color: 'white',

    }
});

export default ColorButton;