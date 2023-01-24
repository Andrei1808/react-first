import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(elem => {
        return <Post message={elem.message} id={elem.id} likeCounts={elem.likesCount}/>
    })
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    let newPostElement = React.createRef()

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div><textarea ref={newPostElement} cols="50" rows="5"></textarea></div>
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