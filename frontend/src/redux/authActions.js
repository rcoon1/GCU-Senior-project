import { ActionType } from './ActionType';


export const authenticate = () => {
    return {
        type: ActionType.AUTH_REQ
    }
}


export const authSuccess = (content) => {
    localStorage.setItem('USER_KEY', content.token);
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: content
    }
}

export const authFailure = (error) => {
    return {
        type: ActionType.AUTH_FAILURE,
        payload: error
    }
}

export const authLogout = () => {
    return {
        type: ActionType.AUTH_LOGOUT
    }
}

export const userInfoFetched = (userData) => {
    return {
        type: ActionType.USER_INFO_FETCHED,
        payload: userData
    }
}

export const userInfoLost = () => {
    return {
        type: ActionType.USER_INFO_LOST
    }
}

