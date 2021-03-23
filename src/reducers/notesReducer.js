import notesData from '../data/NotesData';
import * as actions from '../actions/actionType';

const initState = {
    notes: notesData,
    search: "",
    category: "all"
};
  
function notesReducer(state = initState, action) {
    switch (action.type) {
        case actions.SEARCH_NOTE: {
            return {
                ...state,
                search: action.payload.search
            };
        }
        case actions.CHANGE_CATEGORY: {
            return {
                ...state,
                category: action.payload.category
            };
        }
        case actions.ADD_NOTE: {
            let note = action.payload.note;
            note.id = state.notes.length + 1;
            note.createdDate = new Date().toISOString().slice(0,10);
            note.updatedDate = new Date().toISOString().slice(0,10);
            return {
                ...state,
                notes: [note, ...state.notes]
            };
        }
        case actions.EDIT_NOTE: {
            let note = action.payload.note;
            note.updatedDate = new Date().toISOString().slice(0,10);
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
            let updatedDate = new Date().toISOString().slice(0,10);
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

export default notesReducer;