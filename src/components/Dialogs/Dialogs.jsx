import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Kolya'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Ania'},
        {id: 7, name: 'Alex'},
    ]

    let messagesData = [
        {id: 1, message: 'Boooooom!'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Who are you?'},
        {id: 4, message: 'Ouuuch!'},
        {id: 5, message: 'yoyooyoyoYOYOYO'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
            </div>
        </div>

    )
}

export default Dialogs