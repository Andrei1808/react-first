import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map(elem => {
        return <Post message={elem.message} id={elem.id} likeCounts={elem.likesCount}/>
    })
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div><textarea onChange={onPostChange} value={props.newPostText}/></div>
                    <div>
                        <button onClick={addPost}>ADD Post</button>
                    </div>
                </div>
                Newpost
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;