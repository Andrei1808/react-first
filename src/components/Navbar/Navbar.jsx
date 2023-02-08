import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from './../Friends/Friends'
import React from "react";

const setActive = (navData) => navData.isActive ? classes.active : classes.item

const Navbar = (props) => {
    let friendInfo = props.friends.map(el => <Friends name={el.name} img={el.img} id={el.id}/>)
    return (<div className={classes.nav}>
            <nav>
                <div className={`${classes.item}`}>
                    <NavLink to="/profile" className={setActive}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" className={setActive}> News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" className={setActive}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" className={setActive}>Settings</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/users" className={setActive}>Users</NavLink>
                </div>
            </nav>
            <div className={classes.friendsBlock}>
                <h3>Friends</h3>
                <div className={classes.friends}>
                    {friendInfo}
                </div>
            </div>
        </div>
    )
}

export default Navbar;