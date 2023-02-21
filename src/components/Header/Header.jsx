import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src="https://media.istockphoto.com/id/1180882238/vector/success-logo.jpg?s=612x612&w=0&k=20&c=brO28PRCR_73Oj-qVIGDzYxfDwZj17t7VrLb-JiGH2Q="
                alt="efefe"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>LOGIN</NavLink>}
            </div>
        </header>
    )
}

export default Header;