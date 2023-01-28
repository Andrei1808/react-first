const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessage,
            };
            state.messages.push(newMessage);
            state.newMessage = '';
            break;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
            break;
    }

    return state;
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