import React, {FC, memo} from "react";
import {Route, Routes} from "react-router-dom";
import {Main} from "../main/Main";
import {News} from "../news/News";
import {Login} from "../login/Login";


export const Body: FC = memo(() => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </div>
    )
})