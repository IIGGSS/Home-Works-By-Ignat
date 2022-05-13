import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './styles.module.css';

function Header() {

    return (
        <div className={s.header}>
            {/*// add NavLinks*/}
            <div className={s.object}></div>
            <div className={s.linksContainer}>
                <NavLink className={s.link} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
                <NavLink className={s.link} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </div>
        </div>
    )
}

export default Header
