import React, {FC, memo} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import style from './main.module.scss';


export const Main: FC = memo(() => {

    const isUser = useSelector((state: AppStateType) => state.login.isUser);
    const isAdmin = useSelector((state: AppStateType) => state.login.isAdmin);

    return (
        <div className={style.container}>
            <p>Привет,<span>{isUser ? ' Друг' : isAdmin ? ' Админ' : ' Гость'}</span> !</p>
        </div>
    )
})