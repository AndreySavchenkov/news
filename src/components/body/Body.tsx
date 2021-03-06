import React, {FC, memo} from "react";
import {Route, Routes} from "react-router-dom";
import {Main} from "../main/Main";
import {News} from "../news/News";
import {Login} from "../login/Login";
import style from './body.module.scss';


export const Body: FC = memo(() => {

    return (
        <div className={style.container}>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/newsPage' element={<News/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    )
})