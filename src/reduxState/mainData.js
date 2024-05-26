import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoDATA: null,
};

const formatData = (data) => {
    return Object.keys(data).map((key) => ({
      title: key,
      data: data[key],
    }));
  };

const updateVideoResponseReducers = (state, action) => {
    const formattedData = formatData(action.payload);
   // console.log('formatted data', formattedData)
  state.videoDATA = formattedData;
};

//Reducer

const videoSlice = createSlice({
  name: "videoData",
  initialState,
  reducers: {
    updateVideoResponse: updateVideoResponseReducers,
  },
});
//Action
const { updateVideoResponse } = videoSlice.actions;
//selector
const selectVideo = ({ video }) => {
   
   return video.videoDATA;
}

const videoSliceReducer = videoSlice.reducer;

export { videoSliceReducer, updateVideoResponse, selectVideo };
