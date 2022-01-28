import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import {Login} from "../login/Login";
import style from "./nav.module.scss";


export const Nav: FC = memo(() => {

    return (
        <nav className={style.nav}>
            <NavLink className={style.nav_logo} to='/'><img  src={logo} alt="logo"/></NavLink>
            <div className={style.nav_container}>
                <NavLink to='/' >Главная</NavLink>
                <NavLink to='/newsPage'>Новости</NavLink>
                <Login/>
            </div>
        </nav>
    )
})