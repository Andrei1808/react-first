import React from "react";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let  mapDispatchToProps =(dispatch)=>{
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator());
        },
        onPostChange: (text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;