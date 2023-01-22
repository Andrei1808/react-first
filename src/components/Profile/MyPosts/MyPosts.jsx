import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Ouuuch!', likesCount: 11},
        {id: 2, message: 'yoyooyoyoYOYOYO', likesCount: 56},
    ]

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
                <Post message={postsData[0].message} likeCounts={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likeCounts={postsData[1].likesCount}/>
            </div>
        </div>

    )
}

export default MyPosts;