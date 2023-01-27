import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(elem => {
        return <Post message={elem.message} id={elem.id} likeCounts={elem.likesCount}/>
    })
    let addPost = () => {
        props.addPost();
    }
    let newPostElement = React.createRef()

    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
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