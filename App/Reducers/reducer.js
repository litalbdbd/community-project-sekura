
import {combineReducers} from 'redux';



const userReducer = (oldUsers , action) =>{
    // const likedPost = oldUsers.find(p => p === action.payload.userID);
	// if (likedPost) { //post is already in the liked list
	// 	return ;
    // }
    
    if (action.type == 'LIKE'){
        return[...oldUsers,action.payload.userID]
    }
    else{
        return oldUsers.filter(user => user !== action.payload.userID)
    }
};

const postReducer = (oldPosts , action) =>{
    if (action.type == 'LIKE'){
        return[...oldPosts,action.payload.postID]
    }
    else{
        return oldPosts.filter(post => post !== action.payload.postID)
    }
};


export default combineReducers({
    posts:postReducer,
    users:userReducer
});