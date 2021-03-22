import * as actions from './actionType';

function searchNotes(search) {
    return {
       type: actions.SEARCH_NOTE,
       payload: {
           search: search
       }
    }
}

export default searchNotes