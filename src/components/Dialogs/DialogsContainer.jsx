import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        showMessage: (message) => {
            dispatch(updateNewMessageActionCreator(message));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;