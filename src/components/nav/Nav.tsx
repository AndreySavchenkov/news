import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/image/logo.svg";


export const Nav: FC = memo(() => {

    return (
        <nav>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <NavLink to={'/main'}>Главная</NavLink>
                <NavLink to={'/news'}>Новости</NavLink>
                <NavLink to={'/login'}>Вход</NavLink>
            </div>
        </nav>
    )
})