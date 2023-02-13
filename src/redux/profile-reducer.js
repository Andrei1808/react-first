const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Ouuuch!', likesCount: 11},
        {id: 2, message: 'yoyooyoyoYOYOYO', likesCount: 56},
        {id: 3, message: 'Hop Hey Nanannei!!!', likesCount: 2356},
        {id: 4, message: 'DAAAAA!!!', likesCount: 5555},
    ],
    newPostText: 'it-kamasutra',
    profile: null

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}],
                newPostText: '',
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return ({
            type: 'ADD-POST'
        }
    )
}
export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    })
}
export const setUserProfile = (profile) => {
    return ({
        type: SET_USER_PROFILE,
        profile
    })
}

export default profileReducer;