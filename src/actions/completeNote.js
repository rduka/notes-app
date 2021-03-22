import * as actions from './actionType';

function completeNote(id) {
    return {
       type: actions.COMPLETE_NOTE,
       payload: {
            id: id
       }
    }
}

export default completeNote