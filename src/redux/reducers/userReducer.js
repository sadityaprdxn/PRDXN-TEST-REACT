import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
} from '../actionTypes/actionTypes';

const initialState = {
    isLoading : true,
    isError : false,
    data : []
}

const userReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading : true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                data : action.payLoad,
                isLoading : false
            }
        
        case FETCH_USERS_ERROR:
            return {
                ...state,
                isError : true,
                isLoading : false
            }
    
        default:
            return state;
    }
}

export { userReducer };