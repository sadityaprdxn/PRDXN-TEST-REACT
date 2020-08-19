import axios from 'axios';
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
} from '../actionTypes/actionTypes';

const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = ( users ) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payLoad : users
    }
}

const fetchUsersError = () => {
    return {
        type : FETCH_USERS_ERROR
    }
}

const fetchUsers = ( pageNumber ) => {
    return (dispatch) => {

        dispatch(fetchUsersRequest());

        axios.get(`https://www.anapioficeandfire.com/api/characters?page=${pageNumber}&pageSize=50`)
        .then( response => {
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
        })
        .catch( error => {
            const errorMessage = error.message;
            dispatch(fetchUsersError(errorMessage));
        })
    }
}

export { fetchUsers };