const SET_CURRENT_DIR = "SET_CURRENT_DIR"
const SET_FILES = "SET_FILES"

const defaultState = {
    files: [],
    currentDir: null
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES: return {... state, files: action.payload}
        case SET_CURRENT_DIR: return {...state, currentDir: action.payload}
        default:
            return state
    }
}

export const setFiles = (files)=>({action: SET_FILES, payload: files})
export const setDir = (dir)=>({action: SET_CURRENT_DIR, payload: dir})
