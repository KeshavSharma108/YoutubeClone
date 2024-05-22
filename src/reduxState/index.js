import { combineReducers } from "redux";


import * as VideoData from './mainData'

const reducers = combineReducers({
    video : VideoData.videoSliceReducer,
})


export {
    VideoData,reducers
}