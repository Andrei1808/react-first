import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} posts={props.state.posts} newPostText={props.state.newPostText}/>
        </div>
    )
}

export default Profile;
