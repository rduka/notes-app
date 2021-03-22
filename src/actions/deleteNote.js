import * as actions from './actionType';

function deleteNote(id) {
    return {
       type: actions.DELETE_NOTE,
       payload: {
            id: id
       }
    }
}

export default deleteNote