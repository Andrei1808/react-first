const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am developer',
            location: {city: 'Minsk', country: 'Belarus'},
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYGTUBEL4rO_u30-5Qn5vhXKU1MaD-fxNpg&usqp=CAU'
        },
        {
            id: 2,
            followed: true,
            fullName: 'Andrew',
            status: 'I am senior developer',
            location: {city: 'Moscow', country: 'Russia'},
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHoR2kRVgewoK_QRAo212cbPIndpFNW5_SQ&usqp=CAU'
        },
        {
            id: 3,
            followed: true,
            fullName: 'Alex',
            status: 'I am HR',
            location: {city: 'Kyiv', country: 'Ukraine'},
            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNnc_SEn6a12Qinb6KirliKPBk79IJshQ3g&usqp=CAU'
        },
        {
            id: 4,
            followed: false,
            fullName: 'John',
            status: 'Looking for a job',
            location: {city: 'Miami', country: 'USA'},
            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4CUnpHkbxQfT8OCofTa2DvMOjyim1lqdqQ&usqp=CAU'
        }
    ],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;