import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
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