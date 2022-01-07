import {
    START_GAME,
    ADD_COLOR,
    DISPLAY_COLORS,
    PLAYER_GUESSED_RIGHT,
    PLAYER_GUESSED_RIGHT_LAST_COLOR,
    PLAYER_GUESSED_RIGHT_STILL_PLAYING,
    PLAYER_GUESSED_WRONG,
    SAVE_STATE, QUIT_AND_SAVE
} from '../utils/consts';
const initialState = {
    name: '',
    isOn: false,
    isDisplay: false,
    colors: [],
    score: 0,
    userTurn: false,
    userColors: []
};

export default  PlayReducer = (state = initialState, action)=>{
    console.log('action payload redux: \n',action.payload);
    switch(action.type){
        case SAVE_STATE: return {...action.payload};
        case QUIT_AND_SAVE: return {...action.payload};
    //     case START_GAME: 
    //     return {...state,isOn: true, isDisplay:true};
    //     case ADD_COLOR: 
    //     console.log('colors to add: \n',action.payload);
    //     return {...state,colors: action.payload};
    //     case DISPLAY_COLORS: 
    //         return {...state, isDisplay:false, userTurn: true, userColors: action.payload};
    //    case PLAYER_GUESSED_WRONG: 
    //         return {...initialState, score: state.colors.length};
    //     case PLAYER_GUESSED_RIGHT: return {...state,userTurn:true};
    //     case PLAYER_GUESSED_RIGHT_LAST_COLOR: 
    //         return {...state, userColors: action.payload, isDisplay:true, score: state.colors.length };
    //     case PLAYER_GUESSED_RIGHT_STILL_PLAYING: 
    //         return {...state, isDisplay: false, userTurn: true, userColors: action.payload};
        default: return state;
    }
}