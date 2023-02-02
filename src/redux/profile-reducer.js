const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Ouuuch!', likesCount: 11},
        {id: 2, message: 'yoyooyoyoYOYOYO', likesCount: 56},
        {id: 3, message: 'Hop Hey Nanannei!!!', likesCount: 2356},
        {id: 4, message: 'DAAAAA!!!', likesCount: 5555},
    ],
    newPostText: 'it-kamasutra'

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

export default profileReducer;