import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import {Login} from "../login/Login";


export const Nav: FC = memo(() => {

    return (
        <nav>
            <div>
                <NavLink to={'/'}><img src={logo} alt="logo"/></NavLink>

            </div>
            <div>
                <NavLink to={'/'}>Главная</NavLink>
                <NavLink to={'/news'}>Новости</NavLink>
                <Login/>
            </div>
        </nav>
    )
})