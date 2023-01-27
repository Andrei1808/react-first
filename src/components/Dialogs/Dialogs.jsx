import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(elem => {
        return <DialogItem name={elem.name} id={elem.id}/>
    })
    let messagesElements = props.state.messages.map(elem => {
        return <Message message={elem.message} id={elem.id}/>
    })
    let addMessage = () => {
        props.addMessage();
    }

    let newMessageElement = React.createRef();

    let showMessage = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessage(message)
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
                        <div><textarea onChange={showMessage} ref={newMessageElement} value={props.state.newMessage}/></div>
                        <div>
                            <button onClick={addMessage}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs