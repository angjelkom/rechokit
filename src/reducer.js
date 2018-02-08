import { RENDER_MESSAGE } from "./actions";

const reducer = (state = {message: ''}, action) => {
    switch(action.type) {
        case RENDER_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        break;
        default:
            return state;
    }
}

export default reducer;