import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";



const Dialogs = (props) => {
debugger;
    let dialogsElements = props.dialogs.map(elem => {
        return <DialogItem name={elem.name} id={elem.id}/>
    })
    let messagesElements = props.messages.map(elem => {
        return <Message message={elem.message} id={elem.id}/>
    })
    let addMessage = () => {
        props.addMessage();
    }

    let showMessage = (e) => {
        let message = e.target.value;
        props.showMessage(message);
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
                        <div><textarea placeholder='Enter your message' onChange={showMessage} value={props.newMessage}/>
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