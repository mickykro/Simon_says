import {
    START_GAME,
    ADD_COLOR,
    DISPLAY_COLORS,
    PLAYER_GUESSED_RIGHT,
    PLAYER_GUESSED_RIGHT_LAST_COLOR,
    PLAYER_GUESSED_RIGHT_STILL_PLAYING,
    PLAYER_GUESSED_WRONG,
    QUIT_AND_SAVE
} from '../utils/consts';

export const saveState = (state) => dispatch =>{
    dispatch({
        type: START_GAME,
        payload: state
    });
};
export const quitAndSave = (state) => {
    dispatch({
        type: QUIT_AND_SAVE,
        payload: state
    })
}
export const startGame = () => dispatch =>{
     dispatch({
        type: START_GAME,
        payload: {}
    });
};
export const addColor = copyColors => dispatch =>{
    dispatch({
        type: ADD_COLOR,
        payload: copyColors
    });
};
export const displayColors = userColors => dispatch =>{
     dispatch({
        type: DISPLAY_COLORS,
        payload: userColors
    });
};
export const playerGuessedRight = () => dispatch =>{
     dispatch({
        type: PLAYER_GUESSED_RIGHT,
        payload: {}
    });
};
export const playerGuessedRightLastColor = copyColors => dispatch =>{
     dispatch({
        type: PLAYER_GUESSED_RIGHT_LAST_COLOR,
       payload: copyColors
    });
};
export const playerGuessedRightStillPlaying = copyColors => dispatch =>{
     dispatch({
        type: PLAYER_GUESSED_RIGHT_STILL_PLAYING,
        payload: copyColors
    });
};
export const playerGuessedWrong = () => dispatch =>{
     dispatch({
        type: PLAYER_GUESSED_WRONG,
        payload: {}
    });
};



