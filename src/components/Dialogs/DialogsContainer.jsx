import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
debugger;
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let showMessage = (message) => {
        props.store.dispatch(updateNewMessageActionCreator(message));
    }

    return (
        <Dialogs addMessage={addMessage}
                 showMessage={showMessage}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessage={state.dialogsPage.newMessage}/>
    )
}

export default DialogsContainer;