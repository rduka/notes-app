import * as actions from './actionType';

function addNote(note) {
    return {
       type: actions.ADD_NOTE,
       payload: {
           note: note
       }
    }
}

export default addNote