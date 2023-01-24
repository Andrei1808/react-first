import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.posts.map(elem => {
        return <Post message={elem.message} id={elem.id} likeCounts={elem.likesCount}/>
    })


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div><textarea name="" id="" cols="50" rows="5"></textarea></div>
                    <div>
                        <button>ADD Post</button>
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