import { USER_REQUEST } from './userTypes';
import { USER_SUCCESS } from './userTypes';
import { USER_FAILED } from './userTypes';

const initialState = {
    user: [],
    loading: false,
    error: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false
            };
        case USER_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}

export default userReducer;