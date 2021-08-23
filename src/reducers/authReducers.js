import { SIGN_IN_OK } from "../actions/types";
import { SIGN_OUT } from "../actions/types";
import { SIGN_UP } from "../actions/types";
import { EDIT_USER } from "../actions/types";

const initialState = {
    loginStatus:false,
    userLogin:{},
    userList:[ 
    {
        id:1,
        name:'Fian',
        username:"fian1@gmail.com",
        password:"fian123@",
        role:"admin",
        image:'https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216671.5403_tunyra_n.jpg',
        phone:'+6283695765777'
    },
    {
        id:2,
        name:'John',
        username:"john1@gmail.com",
        password:"john123@",
        role:"staff",
        image:"https://i.pinimg.com/736x/29/a8/0b/29a80b9fdd5ff4cfc3eef5476d6740f1.jpg",
        phone:'+6285615764351'
    }]
}

const edit = (list, newData) => {
    const dataList = [...list];
    const index = list.findIndex(item => item.id === newData.id);
    dataList.splice(index, 1, newData);
    return dataList
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
        case EDIT_USER:
            return {
                ...state,
                userList:edit(state.userList,action.data)
            }
        default:
            return state
    }
}

export default authReducer;