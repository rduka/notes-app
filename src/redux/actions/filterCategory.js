import * as actions from '../common/actionType';

function filterCategory(category) {
    return {
       type: actions.FILTER_TAB_CATEGORY,
       payload: {
            category: category
       }
    }
}

export default filterCategory