import { USER_REQUEST } from './userTypes';
import { USER_SUCCESS } from './userTypes';
import { USER_FAILED } from './userTypes';

export const userRequest = () => {
    return {
        type: USER_REQUEST
    };
};

export const userSuccess = (user, jwt) => {
    return {
        type: USER_SUCCESS,
        user,
        jwt
    };
};

export const userFailed = (error) => {
    return {
        type: USER_FAILED,
        error
    };
};