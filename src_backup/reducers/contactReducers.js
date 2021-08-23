import { STORE_CONTACT } from "../actions/types";


const initialState = {
    contactList:[]
}

const contactReducer = (state = initialState,action) => {
    switch(action.type){
        case STORE_CONTACT:
            return {
                contactList:action.data
            }
        default:
            return state
    }
}

export default contactReducer;