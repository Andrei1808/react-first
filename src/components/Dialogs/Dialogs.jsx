import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogs-reducer'


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(elem => {
        return <DialogItem name={elem.name} id={elem.id}/>
    })
    let messagesElements = props.state.messages.map(elem => {
        return <Message message={elem.message} id={elem.id}/>
    })
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let showMessage = (e) => {
        let message = e.target.value;
        props.dispatch(updateNewMessageActionCreator(message));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <div>
                        <div><textarea placeholder='Enter your message' onChange={showMessage} value={props.state.newMessage}/>
                        </div>
                        <div>
                            <button onClick={addMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs