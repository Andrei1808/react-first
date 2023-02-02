import classes from './../Dialogs.module.css'



const Message = (props) => {
    debugger
    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}

export default Message