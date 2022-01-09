import {StyleSheet} from 'react-native';

export const homePageStyle = StyleSheet.create({
    background: {
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