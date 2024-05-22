import {all , fork} from 'redux-saga/effects';
import { watchMainServices } from './mainSaga';



export default function* rootSaga(){
    yield all([
        fork(watchMainServices)
    ])
}