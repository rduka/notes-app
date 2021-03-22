import notesData from '../data/NotesData';
import * as actions from '../actions/actionType';

const initState = {
    notes: notesData,
    search: "",
    category: "all"
};
  
function notesReducer(state = initState, action) {
    switch (action.type) {
        case actions.ADD_NOTE: {
            let note = action.payload.note;
            note.id = state.notes.length + 1;
            return {
                ...state,
                notes: state.notes.concat(note)
            };
        }
        default: {
            return state;
        }
    }
};

export default notesReducer;