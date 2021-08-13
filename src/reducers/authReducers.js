import { SIGN_IN_OK } from "../actions/types";
import { SIGN_OUT } from "../actions/types";
import { SIGN_UP } from "../actions/types";

const initialState = {
    loginStatus:false,
    userLogin:{}
}

const authReducer = (state = initialState,action) => {
    switch(action.type){
        case SIGN_IN_OK:
            return {
                loginStatus:true,
                userLogin:action.data
            }
        case SIGN_OUT:
            return {
                loginStatus:false,
                userLogin:{}
            }
        default:
            return state
    }
}

export default authReducer;