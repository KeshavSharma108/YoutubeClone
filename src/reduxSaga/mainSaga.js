import { MainApi } from "../Services";
import dispatchConstant from "./dispatchConstant";
import { call, takeLatest } from "redux-saga/effects";

export function* getVideoList(action) {
  const apiResponse = yield call(MainApi.getVideoUrl, action.payload);
  console.log("apiresponseapi", JSON.stringify(apiResponse.response));
}

export function* watchMainServices() {
  yield takeLatest(dispatchConstant.VIDEO_LIST, getVideoList);
}
