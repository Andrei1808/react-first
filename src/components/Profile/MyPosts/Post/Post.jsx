import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJpZB5kEwuaiIvKuf44FXq9oUaHVHo1IUsg&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span>Like: {props.likeCounts}</span>
            </div>
        </div>
    )
}

export default Post;