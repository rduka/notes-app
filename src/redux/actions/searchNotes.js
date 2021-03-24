import * as actions from '../common/actionType';

function searchNotes(search) {
    return {
       type: actions.SEARCH_NOTES,
       payload: {
           search: search
       }
    }
}

export default searchNotes