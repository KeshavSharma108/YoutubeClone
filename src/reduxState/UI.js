import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoading: false
}


/**
 * show/hide loader reducer handler
 * @param {Object} state - redux state
 * @param {Object} action - type and payload
*/


const showLoaderReducer = (state,action) =>{
    state.isLoading = action.payload;
}



//Reducer

const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        showLoader : showLoaderReducer,
    },
});


//Actions

const {showLoader}=uiSlice.actions;

//Selector

const selectLoader = ({ui}) => ui.isLoading;


const uiSliceReducer = uiSlice.reducer;


export{
    showLoader,
    selectLoader,
    uiSliceReducer
}


 