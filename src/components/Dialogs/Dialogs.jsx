import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



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

    let dialogsElements = dialogsData.map(elem => {
        return <DialogItem name={elem.name} id={elem.id}/>
    })

    let messagesElements = messagesData.map(elem => {
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