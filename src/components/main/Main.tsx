import React, {FC, memo} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";



export const Main: FC = memo(() => {

    const isUser = useSelector<AppStateType>(state => state.isUser);
    const isAdmin = useSelector<AppStateType>(state => state.isAdmin);

    return(
        <div>
            <h1>main</h1>
            Привет, { isUser ? 'Друг' : isAdmin ? 'Админ' : 'Гость'}!
        </div>
    )
})