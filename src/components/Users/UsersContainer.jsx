import React from "react";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps =(dispatch)=> {
    return{
        follow:(userId)=>{
            dispatch(followActionCreator(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users)=>{
            dispatch(setUsersActionCreator(users))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);

