import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let postsData = [
    {id: 1, message: 'Ouuuch!', likesCount: 11},
    {id: 2, message: 'yoyooyoyoYOYOYO', likesCount: 56},
    {id: 3, message: 'Hop Hey Nanannei!!!', likesCount: 2356},
    {id: 4, message: 'DAAAAA!!!', likesCount: 5555},
]

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts arr={postsData}/>
        </div>
    )
}

export default Profile;
