import axios from 'axios'

export const REQUEST_USER_DATA = "REQUEST_USER_DATA"

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}
export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }

}

export default function (state = initialState, action){
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            // const {email, lastName, firstName} = action.payload.user
            return { ...state, ...action.payload.user}
        default:
            return state
    }
  
}

