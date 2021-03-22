import * as actions from './actionType';

function changeCategory(category) {
    return {
       type: actions.CHANGE_CATEGORY,
       payload: {
            category: category
       }
    }
}

export default changeCategory