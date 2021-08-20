import { SIGN_IN_OK } from "../actions/types";
import { SIGN_OUT } from "../actions/types";
import { SIGN_UP } from "../actions/types";

const initialState = {
    loginStatus:false,
    userLogin:{},
    userList:[ 
    {
        name:'Fian',
        username:"fian1@gmail.com",
        password:"fian123@",
        role:"admin",
        image:'https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216671.5403_tunyra_n.jpg'
    },
    {
        name:'John',
        username:"john1@gmail.com",
        password:"john123@",
        role:"staff",
        image:"https://i.pinimg.com/736x/29/a8/0b/29a80b9fdd5ff4cfc3eef5476d6740f1.jpg"
    }]
}

const authReducer = (state = initialState,action) => {
    switch(action.type){
        case SIGN_IN_OK:
            return {
                ...state,
                loginStatus:true,
                userLogin:action.data
            }
        case SIGN_OUT:
            return {
                ...state,
                loginStatus:false,
                userLogin:{}
            }
        default:
            return state
    }
}

export default authReducer;