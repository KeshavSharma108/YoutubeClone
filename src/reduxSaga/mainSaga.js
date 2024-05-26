import { MainApi } from "../Services";
import { UILoader, VideoData } from "../reduxState";
import dispatchConstant from "./dispatchConstant";
import { call, put, takeLatest } from "redux-saga/effects";

export function* getVideoList(action) {

    yield put(UILoader.showLoader(true));
 
  const apiResponse = yield call(MainApi.getVideoUrl, action.payload);
  //console.log("apiresponseapi", JSON.stringify(apiResponse.response));

  if (apiResponse?.response?.status === 1) {
    yield put(VideoData.updateVideoResponse(apiResponse?.response?.data));
  }
  yield put(UILoader.showLoader(false));
}

export function* watchMainServices() {
  yield takeLatest(dispatchConstant.VIDEO_LIST, getVideoList);
}
