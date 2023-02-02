import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";




const MyPosts = (props) => {
    debugger
    console.log(props)

    let postsElements = props.posts.map(elem => {
        return <Post message={elem.message} id={elem.id} likeCounts={elem.likesCount}/>
    })
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
      props.onPostChange(text)
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