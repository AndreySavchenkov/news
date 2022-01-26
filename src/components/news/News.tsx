import React, {FC, memo} from "react";
import {Item} from "./Item/Item";


export const News: FC = memo(() => {

    return (
        <div>
            <h2>News</h2>
            <div>
                <Item
                    title={'Первая новость'}
                    text={'Текст первой новости'}
                    data={'Дата создания первой новости'}/>
                <Item
                    title={'Вторая новость'}
                    text={'Текст второй новости'}
                    data={'Дата создания второй новости'}/>
                <Item
                    title={'Третья новость'}
                    text={'Текст третьей новости'}
                    data={'Дата создания третьей новости'}/>
                <Item
                    title={'Четвертая новость'}
                    text={'Текст четвертой новости'}
                    data={'Дата создания четвертой новости'}/>
            </div>
        </div>
    )
})