import { combineReducers } from "redux";

import * as VideoData from "./mainData";
import * as UILoader from './UI';

const reducers = combineReducers({
  video: VideoData.videoSliceReducer,
  ui: UILoader.uiSliceReducer,
});

export { VideoData, reducers ,UILoader};
