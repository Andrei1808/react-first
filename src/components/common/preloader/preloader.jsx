import preloader from "../../../assets/images/preloader.gif";
import React from "react";
import classes from "./preloader.module.css"

let Preloader=(props)=>{
    return(
        <div><img src={preloader} className={classes.imgSize} /></div>
    )
}
export default Preloader;