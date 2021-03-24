import * as actions from '../common/actionType';

function editNote(note) {
    return {
       type: actions.EDIT_NOTE,
       payload: {
           note: note
       }
    }
}

export default editNote