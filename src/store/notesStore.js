import {createStore} from "redux"
import notesReducer from "../reducers/notesReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import throttle from 'lodash.throttle';
import { saveNotes } from '../data/localStorage';

const store = createStore(
    notesReducer, 
    composeWithDevTools()
);

// we are going to save the notes only
store.subscribe(
	throttle( () => saveNotes(store.getState().notes), 1000)
);

export default store;