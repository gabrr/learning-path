import { SET_THEME } from "./constants";

const INITIAL_STATE = 'dark'

export const themeReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case SET_THEME:
            return action.theme
        default:
            return state
    }
}