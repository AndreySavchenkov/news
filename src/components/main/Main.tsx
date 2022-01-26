import React, {FC, memo} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";



export const Main: FC = memo(() => {

    const isUser = useSelector((state: AppStateType) => state.login.isUser);
    const isAdmin = useSelector((state: AppStateType) => state.login.isAdmin);

    return(
        <div>
            <h1>main</h1>
            Привет, { isUser ? 'Друг' : isAdmin ? 'Админ' : 'Гость'}!
        </div>
    )
})