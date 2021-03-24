import * as actions from '../common/actionType';
import { loadNotes } from '../../data/localStorage';

//Disclaimer!
//After some reading, the BL is not specified if it should reside in actions or reducers. At least, there is no consesus.
//For now i am keeping it here and later might change it after working on some real life projects and getting more experience.

const initState = {
    notes: loadNotes(),
    search: "",
    category: "all"
};
  
function notesReducer(state = initState, action) {
    switch (action.type) {
        case actions.SEARCH_NOTES: {
            return {
                ...state,
                search: action.payload.search
            };
        }
        case actions.FILTER_TAB_CATEGORY: {
            return {
                ...state,
                category: action.payload.category
            };
        }
        case actions.ADD_NOTE: {
            let note = action.payload.note;
            note.id = getNewIdForNote(state.notes); 
            note.createdDate = getFormatedDate();
            note.updatedDate = getFormatedDate();
            return {
                ...state,
                notes: [note, ...state.notes]
            };
        }
        case actions.EDIT_NOTE: {
            let note = action.payload.note;
            note.updatedDate = getFormatedDate();
            return {
                ...state,
                notes: state.notes.map(n => 
                    n.id === note.id 
                    ? {...n, title: note.title, description: note.description, category: note.category, updatedDate: note.updatedDate } 
                    : n
                )
            };
        }
        case actions.COMPLETE_NOTE: {
            let updatedDate = getFormatedDate();
            return {
                ...state,
                notes: state.notes.map(note => 
                    note.id === action.payload.id ? {...note, completed: !note.completed, updatedDate: updatedDate} : note
                )
            };
        }
        case actions.DELETE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            };
        }
        default: {
            return state;
        }
    }
};

function getNewIdForNote(notes){
  if(notes.length === 0) {
    return 1;
  }
  else {
    const idMax = Math.max.apply(Math, notes.map(function(note) { return note.id; }))
    return idMax === undefined ? 1 : idMax + 1;
  }
}

function getFormatedDate(){
    return new Date().toISOString().slice(0,10);
}

export default notesReducer;