import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jfif";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? classes.selectedPage : ''} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small ? user.photos.small : userPhoto} alt={user.id}
                                     className={classes.imgSize}/>
                            </NavLink>
                        </div>
                       <div>
                           {user.followed ? <button onClick={() => {


                                   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
                                       withCredentials:true,
                                       headers: {
                                           "API-KEY": "7e75aa3d-4567-4466-af66-8189c4be3878"
                                       }
                                   })
                                       .then(response => {
                                           if(response.data.resultCode === 0){
                                               props.unfollow(user.id);
                                           }

                                       });

                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{
                                       withCredentials:true,
                                       headers: {
                                           "API-KEY": "7e75aa3d-4567-4466-af66-8189c4be3878"
                                       }
                                   })
                                       .then(response => {
                                           if(response.data.resultCode === 0){
                                               props.follow(user.id);
                                           }

                                       });


                               }}>Follow</button>}
                       </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;