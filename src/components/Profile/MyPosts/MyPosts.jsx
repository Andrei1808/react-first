import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>ADD Post</button>
                </div>
                Newpost
            </div>
            <Post message='Hi, how are you?' likeCounts='15'/>
            <Post message='Its my first post' likeCounts='20'/>
        </div>
    )
}

export default MyPosts;