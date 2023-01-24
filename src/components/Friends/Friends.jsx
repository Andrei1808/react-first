import classes from './Friends.module.css'

let Friends = (props) => {
    return (
        <div className={classes.friend}>
            <img src={props.img} alt={props.id}/>
            <p>{props.name}</p>
        </div>
    )
}

export default Friends;