import MyPostsContainer from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.state}/>
        </div>
    )
}

export default Profile;
