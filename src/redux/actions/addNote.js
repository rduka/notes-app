import * as actions from '../common/actionType';

function addNote(note) {
    return {
       type: actions.ADD_NOTE,
       payload: {
           note: note
       }
    }
}

export default addNote