import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoDATA: null,
};

const updateVideoResponseReducers = (state, action) => {
  state.videoDATA = action.payload;
};

//Reducer

const authSlice = createSlice({
  name: "videoData",
  initialState,
  reducers: {
    updateVideoResponse: updateVideoResponseReducers,
  },
});

const { updateVideoResponse } = authSlice.actions;

const selectVideo = ({ videoData }) => videoData.videoDATA;

const videoSliceReducer = authSlice.reducer;

export { videoSliceReducer, updateVideoResponse, selectVideo };
