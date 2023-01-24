import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(elem => {
        return <DialogItem name={elem.name} id={elem.id}/>
    })

    let messagesElements = props.state.messages.map(elem => {
        return <Message message={elem.message} id={elem.id}/>
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs