const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Boooooom!'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Who are you?'},
        {id: 4, message: 'Ouuuch!'},
        {id: 5, message: 'yoyooyoyoYOYOYO'},
    ],
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Kolya'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Ania'},
        {id: 7, name: 'Alex'},
    ],
    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.newMessage
            };
        case ADD_MESSAGE:
            return{
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: 7, message: state.newMessage}]

            };
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return ({
        type: 'ADD-MESSAGE'
    })
}
export const updateNewMessageActionCreator = (message) => {
    return ({
        type: 'UPDATE-NEW-MESSAGE',
        newMessage: message
    })
}

export default dialogsReducer;